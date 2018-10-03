const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Alejandro',
        text: 'Hey Alex, how are you?',
        createdAt: 1334
    });

    socket.on('createMessage', message => {
        console.log('There is a new message', message);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnect');
    });
});

app.use(express.static(publicPath));
server.listen(port, () => console.log(`Server up on ${port}`));