const title = "Hello, World!";
const body = "これはテンプレートリテラルのサンプルです";
const name = "Akira Kamiyama";
const message = "やっほー！元気？";

const url = "https://jsonplaceholder.typicode.com/users/1";

const fetchData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("失敗:", error);
    throw error;
  }
};

const data = await fetchData();

const items = ["りんご", "バナナ", "ぶどう"];

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
  </head>
  <body>
    <h1>${title}</h1>
    <p>${body}</p>
    <h1>${name}さん</h1>
    <p>${message}</p>
    <ul>
      <li>${items[0]}</li>
      <li>${items[1]}</li>
      <li>${items[2]}</li>
    </ul>
    <ul>
      <li>${data.name}</li>
      <li>${data.email}</li>
      <li>${data.phone}</li>
      <li>${data.website}</li>
      <li>${data.company.name}</li>
    </ul>
  </body>
</html>
`;

console.log(html);
