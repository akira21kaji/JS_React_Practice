//課題１
import { hello } from "./hello.js";

const message = hello("Shinya");
console.log(message);

//課題２
import { addTax } from "./tax.js";

const price = 100;
const priceWithTax = addTax(price);
console.log(`${price}円の商品の税込み価格は${priceWithTax}円です。`);

//課題３
import { add, subtract, multiply, divide } from "./calculate.js";

const a = 10;
const b = 2;

const addResult = add(a, b);
const subtractResult = subtract(a, b);
const multiplyResult = multiply(a, b);
const divideResult = divide(a, b);

console.log(`${a} + ${b} = ${addResult}`);
console.log(`${a} - ${b} = ${subtractResult}`);
console.log(`${a} * ${b} = ${multiplyResult}`);
console.log(`${a} / ${b} = ${divideResult}`);
