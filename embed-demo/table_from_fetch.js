const url = "https://jsonplaceholder.typicode.com/users";

const main = async () => {
  const res = await fetch(url);
  const users = await res.json();

  let tableRows = "";
  for (let i = 0; i < users.length; i++) {
    const u = users[i];
    tableRows += `
    <tr>
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.address.city}</td>
    </tr>
    `;
  }

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Users</title>
    </head>
  </html>
  <body>
    <h1>Users</h1>
    <table>
      <thead>
        ${tableRows}
      </thead>
    </table>
    </body>
  </html>
  `;
  console.log(html);
};

main();
