import * as fs from "fs";
import { wss } from "../index.js";
export default function watchFiles() {
  fs.watch("./public", (eventType, fileName) => {
    console.log(`The file ${fileName} was modified`);
    console.log(`The type of change was ${eventType}`);

    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(`File ${fileName} was updated. Reload the page!`);
      }
    });
  });
}
