
const express = require('express');
const router = express.Router();

router.get('/:location', async (req, res) => {
    const { location } = req.params;
    try {
        // Example Google Maps API Call (Replace with actual API call when API key ready)
        res.json({ message: `Map data about ${location}` });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Google Maps data' });
    }
});

module.exports = router;
