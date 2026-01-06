//課題１、２

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}

//課題３ Reactで状態が変わるとUIが更新される仕組みを、一文で説明せよ。
//Reactではコンポーネント単位で状態（State）を管理することができ、状態が変化されると再レンダリングされるため、UIに即座に変更点が反映される
