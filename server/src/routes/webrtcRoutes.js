const express = require('express');
const router = express.Router();
const axios = require('axios');

const JANUS_REST_URL = 'http://localhost:8088/janus';  // Replace with your Janus REST API URL

router.post('/create-room', async (req, res) => {
    try {
        const response = await axios.post(`${JANUS_REST_URL}/create`, {
            janus: 'create',
            transaction: 'room_create'
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error creating room:', error);
        res.status(500).json({ error: 'Failed to create room' });
    }
});

module.exports = router;

