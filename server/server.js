const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const colors = require("colors");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require("./router");

app.set("port", process.env.PORT || 5000);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);
    socket.emit("message", {
      user: "admin",
      text: `${name} welcome to the room`,
    });
    socket.broadcast
      .to(room)
      .emit("message", { user: "admin", text: `${name} has joined!` });

    socket.join(room);

    io.to(room).emit("roomData", {
      room: room,
      users: getUsersInRoom(room),
    });
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      socket.broadcast.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left chat`,
      });
    }
  });
});

/* using router to route */
app.use(router);

server.listen(app.get("port"), (server) => {
  console.info(`Server listen on port ${app.get("port")}`.bold.inverse.green);
});
