//課題1
const user1 = "https://jsonplaceholder.typicode.com/users/1";
const user2 = "https://jsonplaceholder.typicode.com/users/2";
const user3 = "https://jsonplaceholder.typicode.com/users/3";

const fetchData = async () => {
  try {
    const res = await fetch(user1);
    const data1 = await res.json();
    const res2 = await fetch(user2);
    const data2 = await res2.json();
    const res3 = await fetch(user3);
    const data3 = await res3.json();
    console.log(`ユーザー１： ${data1.name} ${data1.email}`);
    console.log(`ユーザー２： ${data2.name} ${data2.email}`);
    console.log(`ユーザー３： ${data3.name} ${data3.email}`);
  } catch (error) {
    console.error(`エラーが発生しました： ${error}`);
  }
};

fetchData();

//課題４
const url = "https://jsonplaceholder.typicode.com/posts/1";

const fetchThen = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(`タイトル: ${data.title}`);
    console.log(`本文: ${data.body}`);
  } catch (error) {
    console.error(`エラーが発生しました: ${error}`);
  }
};

fetchThen();
