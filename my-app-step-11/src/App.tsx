import { useState } from "react";

type DeepChildProps = {
  value: string;
  onChange: (next: string) => void;
};

function DeepChild({ value, onChange }: DeepChildProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="最下層で編集"
    />
  );
}

type Middle1Props = {
  value: string;
  onChange: (next: string) => void;
};

function Middle1({ value, onChange }: Middle1Props) {
  // Middleは表示上使わないが、DeepChildに“渡すためだけ”に受け取っている
  return (
    <section style={{ border: "1px dashed gray", padding: 12 }}>
      <p>（中間コンポーネント：中継だけ）</p>
      <DeepChild value={value} onChange={onChange} />
    </section>
  );
}

type Middle2Props = {
  value: string;
  onChange: (next: string) => void;
};

function Middle2({ value, onChange }: Middle2Props) {
  return (
    <section style={{ border: "1px dashed gray", padding: 12 }}>
      <p>（中間コンポーネント：中継だけ）</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="中間で編集"
      />
      <Middle1 value={value} onChange={onChange} />
    </section>
  );
}

export default function App() {
  const [text, setText] = useState("");

  return (
    <main style={{ padding: 24, display: "grid", gap: 12 }}>
      <h1>props drilling のイメージ</h1>
      {/* Middleは text を使わないのに、中継のためにpropsを受け渡す必要がある */}
      <Middle2 value={text} onChange={setText} />
      <p>最終値：{text || "（未入力）"}</p>
    </main>
  );
}
