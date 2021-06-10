class Sockets {
  constructor(io) {
    this.io = io;
    this.SocketsEvents();
  }
  SocketsEvents() {
    this.io.on("connection", (socket) => {
      socket.on("mensaje-to-server", (mensaje) => {
        console.log(mensaje);
        this.io.emit("mensaje-from-server", {
          user: mensaje.user,
          msg: mensaje.msg,
          date: new Date(),
        });
      });
    });
  }
}
module.exports = Sockets;
