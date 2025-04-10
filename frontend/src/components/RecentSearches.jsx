
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecentSearches() {
  const [cities, setCities] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newCityName, setNewCityName] = useState('');

  const fetchCities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/weather');
      setCities(response.data.weathers);
    } catch (err) {
      console.error('Error fetching saved cities:', err.message);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/weather/${id}`);
      fetchCities();
    } catch (err) {
      console.error('Error deleting city:', err.message);
    }
  };

  const startEdit = (id, currentCity) => {
    setEditId(id);
    setNewCityName(currentCity);
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/weather/${id}`, { city: newCityName });
      setEditId(null);
      setNewCityName('');
      fetchCities();
    } catch (err) {
      console.error('Error updating city:', err.message);
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-2xl shadow-2xl my-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Recent Searches</h2>

      
      <div className="mb-6">
        <button
          onClick={() => window.open('http://localhost:5000/api/weather/export')}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
        >
           Download Saved Searches (JSON)
        </button>
      </div>

      
      <ul className="space-y-4">
        {cities.map((city) => (
          <li key={city._id} className="flex items-center justify-between p-2 bg-blue-100 rounded-lg">
            {editId === city._id ? (
              <>
                <input
                  type="text"
                  value={newCityName}
                  onChange={(e) => setNewCityName(e.target.value)}
                  className="p-1 rounded border"
                />
                <button onClick={() => handleSave(city._id)} className="bg-green-500 text-white px-2 py-1 rounded ml-2">
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="font-semibold">{city.city}</span>
                <div>
                  <button onClick={() => startEdit(city._id, city.city)} className="text-yellow-500 mr-4">✏️ Edit</button>
                  <button onClick={() => handleDelete(city._id)} className="text-red-500">🗑️ Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentSearches;
