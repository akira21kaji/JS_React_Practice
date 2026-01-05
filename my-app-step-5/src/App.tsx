import Button from "./components/Button";
import Greeting from "./components/Greeting";

export default function App() {
  return (
    <div>
      <Greeting name="Akira" age={34} />
      <Greeting name="Taro" age={20} />
      <Greeting name="Jiro" age={18} />
      <Button label="Click me" color="blue" />
      <Button label="キャンセル" color="red" />
    </div>
  );
}

//porpsを一言で説明するとなにか
//親コンポーネントから子コンポーネントに渡すデータのこと
