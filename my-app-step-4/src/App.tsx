//課題１
// export default function App() {
//   const name = "Akira";
//   const hobby = "soccer";

//   return (
//     <div>
//       <h1>自己紹介</h1>
//       <p>名前: {name}</p>
//       <p>趣味: {hobby}</p>
//     </div>
//   );
// }

//課題２
// export default function App() {
//   const add = (a: number, b: number) => a + b;

//   return (
//     <div>
//       <p>{add(2, 3)}</p>
//     </div>
//   );
// }

//課題３ classが使えず、classNameを使用する理由を述べる
//class自体はjsの予約語となるため、使えないため、classNameを使用する。

//課題４
export default function App() {
  const programingLanguages = ["React", "Vue", "Angular"];

  return (
    <div>
      <h1>モダンなプログラミング言語の一覧</h1>
      <ul>
        {programingLanguages.map((programingLanguage, index) => (
          <li key={index}>{programingLanguage}</li>
        ))}
      </ul>
    </div>
  );
}

//課題５　なぜmap()を使用する際に、keyが必要か
//reactがリスト項目を特定するために用いるため
