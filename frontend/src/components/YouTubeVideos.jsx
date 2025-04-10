
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YouTubeVideos({ city }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) return;

    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: `${city} travel`, 
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            maxResults: 5,
            type: 'video'
          }
        });
        setVideos(response.data.items);
      } catch (err) {
        console.error('Error fetching YouTube videos:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [city]);

  return (
    <div className="w-full p-4 bg-white rounded-2xl shadow-2xl my-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Explore {city} on YouTube 📺</h2>

      {loading ? (
        <div className="text-center text-gray-500">Loading videos...</div> // 🔄 Loading spinner
      ) : videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id.videoId} className="bg-blue-100 p-2 rounded-lg">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full rounded"
                />
                <p className="text-sm font-semibold mt-2">{video.snippet.title}</p>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-red-500">
          No videos found or API error. Please check your API Key and usage!
        </div>
      )}
    </div>
  );
}

export default YouTubeVideos;
