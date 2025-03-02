import * as fs from "fs";
export default function watchFiles() {
  fs.watch("./public", (eventType, fileName) => {
    console.log(`The file ${fileName} was modified`);
    console.log(`The type of change was ${eventType}`);
  });
}
