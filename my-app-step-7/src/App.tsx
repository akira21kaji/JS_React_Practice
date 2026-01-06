//課題１,２

import { useState } from "react";

type CountProps = {
  count: number;
};

type ResetButtonProps = {
  onClick: () => void;
};

function CounterDisplay({ count }: CountProps) {
  return <p>Count: {count}</p>;
}

function ResetButton({ onClick }: ResetButtonProps) {
  return <button onClick={onClick}>Reset</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <ResetButton onClick={() => setCount(0)} />
    </div>
  );
}

//課題３　Reactが「一方向データフロー」であることの利点を一文で説明しなさい
//Reactが一方向のデータフローであることによって、データ管理の煩雑性が低くなる。また、データの流れが明確になるため、データの変更が容易になる。
