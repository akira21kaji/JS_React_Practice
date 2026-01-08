type Book = {
  title: string;
  id: number;
};

export default function App() {
  const books: Book[] = [
    { title: "React", id: 1 },
    { title: "Vue", id: 2 },
    { title: "Angular", id: 3 },
  ];

  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
