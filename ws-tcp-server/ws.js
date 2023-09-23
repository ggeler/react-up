const express = require("express");
const app = express();
const http = require("http");
const { WebSocket, WebSocketServer }  = require("ws");
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server });

wsServer.on("connection", function connection(conn) {
  console.log("Connexión entrante ")
  conn.on("message", function incoming(message, isBinary) {
    console.log(message.toString(), isBinary);
    wsServer.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});
app.get("/", (req, res) => {
  console.log("request ")
  res.send("Hello World!");
});
server.listen(8089, () => {
  console.log("Listening to port 8089");
});
