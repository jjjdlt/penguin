const WebSocket = require('ws');
const axios = require('axios');

const JANUS_SERVER = 'ws://localhost:8188';  // Replace with Janus WebSocket URL if different
const ws = new WebSocket(JANUS_SERVER);

ws.on('open', () => {
    console.log('Connected to Janus WebSocket server');
    // Example: Sending a message to create a session
    ws.send(JSON.stringify({ janus: 'create', transaction: 'session_create' }));
});

ws.on('message', (data) => {
    const message = JSON.parse(data);
    console.log('Received from Janus:', message);
    
    // Handle offers, answers, and ICE candidates here
    // (You can add conditional checks for message.janus types like 'event' or 'webrtcup')
});

ws.on('close', () => {
    console.log('Disconnected from Janus WebSocket server');
});

ws.on('error', (error) => {
    console.error('Error in Janus WebSocket:', error);
});

