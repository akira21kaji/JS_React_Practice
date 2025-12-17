// file: posts_to_cards.js
const url = "https://jsonplaceholder.typicode.com/postss?_limit=5";

const main = async () => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorUrl = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Posts</title>
      </head>
      <body>
        <p>読み込みに失敗しました</p>
      </body>
    </html>
    `;
    console.log(errorUrl);
    return;
  }
  const posts = await res.json();

  let cards = "";
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    // bodyは少し短くして表示。（80文字以降は...で処理）
    const short = p.body.length > 80 ? `${p.body.slice(0, 80)}...` : p.body;
    cards += `
      <article class="card">
        <h2>${p.id}: ${p.title}</h2>
        <p>${short}</p>
      </article>`;
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Posts</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 2rem; display: grid; gap: 1rem; }
    .card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; }
    h2 { margin: 0 0 .5rem; font-size: 1.1rem; }
  </style>
</head>
<body>
  <h1>最新投稿</h1>
  ${cards}
</body>
</html>
  `;
  console.log(html);
};
main();
