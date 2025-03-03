import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import watchFiles from "./file-watcher.js";

const app = express();
const port = 3000;

const server = createServer(app);

export const wss = new WebSocketServer({ server });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function messsage(data) {
    console.log(`received ${data}`);
  });

  ws.send("Hello from WebSocket!");
});

app.use(express.static("../public"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

watchFiles(wss);

server.listen(port, () => {
  console.log(`HMR server is listening on port ${port}.`);
});
