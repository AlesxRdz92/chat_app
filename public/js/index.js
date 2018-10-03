const socket = io();
socket.on('connect', () => {
    console.log('Connected to the server');

    socket.emit('createMessage', {
        to: 'Alex',
        Text: 'Hey man'
    });
});

socket.on('newMessage', message => {
    console.log('You have a new message', message);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});