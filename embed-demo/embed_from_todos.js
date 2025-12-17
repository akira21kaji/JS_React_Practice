const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const main = async () => {
  const res = await fetch(url);
  const todos = await res.json();

  let todoLists = "";
  for (let i = 0; i < todos.length; i++) {
    const t = todos[i];
    todoLists += `
      <li>
        <strong>${t.title}</strong><br />
        Completed: ${t.completed ? "✅️" : "❌️"}
      </li>`;
  }

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Todos</title>
    </head>
    <body>
      <h1>Todos</h1>
      <ul>
        ${todoLists}
      </ul>
    </body>
  </html>
  `;
  console.log(html);
};

main();
