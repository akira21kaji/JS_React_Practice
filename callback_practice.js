//課題１

const fruits = ["🍎", "🍌", "🍇", "🍓", "🍒"];

fruits.forEach((v, i) => {
  console.log(`${i + 1}番目のフルーツは${v}です。`);
});

//課題２

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 1000);
  }, 1000);
}, 1000);

//課題３
import { readFile } from "node:fs";

readFile("./sampling.txt", "utf-8", (err, text) => {
  if (err) {
    console.error(`読み込みエラー：${err.message}`);
    return;
  }
  console.log(`ファイル内容:\n ${text}`);
});

// 課題４
const fetchData = (userId, callback) => {
  setTimeout(() => {
    const newMessage = callback(userId);
    console.log(newMessage);
  }, 3000);
};

fetchData(123, (userId) => `Hello! ${userId}`);
