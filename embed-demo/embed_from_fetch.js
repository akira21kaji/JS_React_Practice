// file: embed_from_fetch.js
const url = "https://jsonplaceholder.typicode.com/users";

const main = async () => {
  const res = await fetch(url);
  const users = await res.json(); // 配列

  // for文で<li>を組み立てる
  let listItems = "";
  for (let i = 0; i < users.length; i++) {
    const u = users[i];
    listItems += `
      <li>
        <strong>${u.name}</strong>（@${u.username}）<br />
        Email: ${u.email}<br />
        City: ${u.address.city}
      </li>`;
  }

  // ひとつのHTMLにまとめる
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Users</title>
  <style>
    body { font-family: system-ui, sans-serif; line-height: 1.7; }
    ul { padding-left: 1.2rem; }
    li { margin: 0.6rem 0; }
  </style>
</head>
<body>
  <h1>ユーザー一覧</h1>
  <ul>
    ${listItems}
  </ul>
</body>
</html>
`;

  // ひとまずコンソールに表示（STEP19でファイルに保存してブラウザ表示）
  console.log(html);
};

main().catch((err) => console.error(err));
