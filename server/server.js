const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('Disconnected');
    })
});
server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
