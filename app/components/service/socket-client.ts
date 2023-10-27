import io from 'socket.io-client';

const socket = io('http://localhost:5001');

const socketClient = () => {
    socket.on('connection', () => {
        console.log("Connected to server");
        socket.emit('myEvent', { data: "Hello Server"})
    });

    socket.on('message', (data: string) => {
        console.log("Message received: ", data);
        
    })
}

export default socketClient