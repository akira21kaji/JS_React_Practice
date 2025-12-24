import _ from "lodash";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const shuffledNumbers = _.shuffle(numbers);

  return <div>{shuffledNumbers.toString()}</div>;
}

//Node.jsで使えるrequireがブラウザで動かない理由を一文で説明してください。
//Node.jsで使えるrequireがブラウザで動かない理由は、Node.jsで使えるrequireはESモジュールをサポートしていないため、ブラウザでは使用できない。
