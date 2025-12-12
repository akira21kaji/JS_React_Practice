//課題１
const url = "https://jsonplaceholder.typicode.com/users/1";

fetch(url)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return res.json();
  })
  .then((data) => {
    return `ユーザーは${data.name}で、メールは${data.email}です`;
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(`エラー： ${error.message}`);
  });

//課題２
const sayHelloWithDelay = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${seconds}秒後にHello!`);
    }, seconds * 1000);
  });
};

console.log("sayHelloWithDelayを実行");
sayHelloWithDelay(5).then((message) => console.log(`msg: ${message}`));

const failToSayHello = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`${seconds}秒後にエラー`);
    }, seconds * 1000);
  });
};

console.log("failToSayHelloを実行");
failToSayHello(3)
  .then(() => console.log("成功！"))
  .catch((errMessage) => console.log(`error: ${errMessage}`));

console.log("処理中です");
