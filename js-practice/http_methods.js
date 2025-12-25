fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "title",
    body: "body",
    userId: 2,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "title2",
    body: "body",
    userId: 2,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log(data));
