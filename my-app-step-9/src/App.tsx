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

// 課題３　keyを配列のindexで指定する場合とidで指定する場合の違いを一文で説明してください
//配列のindexでkey指定も可能だが、配列順序が変更になる恐れ等もあり適切ではないため、できれば一意のid等でkeyで指定することが好まれる。
