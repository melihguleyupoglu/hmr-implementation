import * as fs from "fs";
import path from "path";

let lastModifiedFiles = {};

export default function watchFiles(ws) {
  fs.watch("../public", (eventType, fileName) => {
    if (!fileName) return;

    const filePath = path.join("../public", fileName);
    fs.readFile(filePath, "utf-8", (err, currentContent) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }

      if (lastModifiedFiles[fileName] !== currentContent) {
        console.log(`The file ${fileName} was modified`);
        lastModifiedFiles[fileName] = currentContent;

        ws.clients.forEach((client) => {
          if (client.readyState === client.OPEN) {
            client.send(`File ${fileName} was updated. Reload the page!`);
          }
        });
      } else {
        console.log(`No changes detected for ${fileName}`);
      }
    });
  });
}
