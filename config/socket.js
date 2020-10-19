import socketIOClient from "socket.io-client";

const ENDPOINT = "http://192.168.100.44:7005";

const socket = socketIOClient(ENDPOINT);

export default socket;