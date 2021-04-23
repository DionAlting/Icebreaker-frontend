import io from "socket.io-client";

const socket = io("https://codaisseur-ice-breaker.herokuapp.com");

export default socket;
