import { readFile } from "node:fs";

readFile("./sample.txt", "utf-8", (err, text) => {
  if (err) {
    console.error(`読み込みエラー：${err.message}`);
    return;
  }
  console.log(`ファイル内容:\n ${text}`);
});
