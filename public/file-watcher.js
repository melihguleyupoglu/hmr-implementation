import * as fs from "fs";
export default function watchFiles(ws) {
  fs.watch("./public", (eventType, fileName) => {
    console.log(`The file ${fileName} was modified`);
    console.log(`The type of change was ${eventType}`);

    ws.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(`File ${fileName} was updated. Reload the page!`);
      }
    });
  });
}
