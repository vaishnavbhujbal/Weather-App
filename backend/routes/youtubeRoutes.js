
const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/:location', async (req, res) => {
    const { location } = req.params;
    try {
        // Example YouTube API Call (Replace with actual API call when API key ready)
        res.json({ message: `YouTube videos about ${location}` });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching YouTube videos' });
    }
});

module.exports = router;
