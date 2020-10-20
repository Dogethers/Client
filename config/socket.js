import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://192.168.1.11:3001';

const socket = socketIOClient(ENDPOINT);

export default socket;
