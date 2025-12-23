import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count + 2)}>+2</button>
    </div>
  );
}

//命令型と宣言型の違い
//命令型は何がどう変わるかを明示して１つずつ変更していくこと。
// 宣言型はこういう状態であれば、こういうUIが表示されるべきという状態を管理できること。
