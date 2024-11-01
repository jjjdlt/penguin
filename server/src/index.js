const express = require('express');
const app = express();
const webrtcRoutes = require('./routes/webrtcRoutes');

app.use(express.json());  // Middleware to parse JSON requests

// Use the WebRTC routes
app.use('/webrtc', webrtcRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

