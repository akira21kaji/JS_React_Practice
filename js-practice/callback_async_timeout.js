console.log("A:開始");

setTimeout(() => {
  console.log("B:1秒後に実行");
}, 2000);

console.log("C:setTimeoutの後に実行");

setTimeout(() => {
  console.log("D:2秒後に実行");
}, 1000);
