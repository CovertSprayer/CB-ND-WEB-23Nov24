const express = require('express');
const { createServer } = require('node:http');
const app = express();
const { Server } = require('socket.io');
const node_server = createServer(app);
const io = new Server(node_server);

app.use(express.static("public"));


io.on('connection', (socket) => {
  console.log("user connected: ", socket.id)

  socket.on("new_msg", (message) => {
    io.emit("msg", {
      message: message,
      socketId: socket.id
    })
  })
  
})

node_server.listen(5000, () => {
  console.log("server is up at port 5000");
})