//課題１

// const api = "https://jsonplaceholder.typicode.com/users/1";

// async function main() {
//   try {
//     const res = await fetch(api);
//     if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
//     const data = await res.json();
//     console.log("ユーザー名 :", data.name);
//     console.log("メール :", data.email);
//   } catch (error) {
//     console.error("失敗:", error);
//   }
// }
// main();

//課題３
// const url = "https://zenn.dev/joo_hashi/books/0a9b2c6fac7055/viewer/d079dc";

// async function main() {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
//     const data = await res.text();
//     console.log(data.slice(0, 300));
//   } catch (error) {
//     console.error("失敗:", error);
//   }
// }
// main();

//課題４
// const url = "https://zenn.dev/joo_hashi/books/0a9b2c6fac7055/viewer/d079dd";

// async function main() {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
//     const data = await res.text();
//     console.log(data.slice(0, 300));
//   } catch (error) {
//     console.error("失敗:", error);
//   }
// }
// main();

//課題５
// const api = new URL("https://jsonplaceholder.typicode.com/todos");
// api.searchParams.set("completed", "true");

// async function main() {
//   try {
//     const res = await fetch(api);
//     if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
//     const data = await res.json();
//     console.log(data.length);
//   } catch (error) {
//     console.error("失敗:", error);
//   }
// }
// main();

//課題５
// const lostUrl = "https://jsonplaceholder.typicode.com/thttps://httpstat.us/404";

// async function main() {
//   try {
//     const res = await fetch(lostUrl);
//     if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error("見つかりません");
//   }
// }
// main();

//課題６
// const api = new URL("https://jsonplaceholder.typicode.com/comments");
// api.searchParams.set("postId", "2");

// async function main() {
//   try {
//     const res = await fetch(api);
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const data = await res.json();
//     console.log(
//       "email:",
//       data.map((m) => m.email)
//     );
//   } catch (error) {
//     console.error("失敗:", error);
//   }
// }
// main();

//課題７
// const api = "https://jsonplaceholder.typicode.com/posts";
// async function main() {
//   try {
//     const res = await fetch(api, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: "これが",
//         body: "課題７の中身です",
//         userId: 1,
//       }),
//     });
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const data = await res.json();
//     console.log(data.id);
//   } catch (error) {
//     console.error("失敗:", error);
//   }
// }
// main();

//課題８
const timeOutUrl = "https://httpstat.us/200?sleep=7000";
