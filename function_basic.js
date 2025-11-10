//課題１

function greet(name) {
  return `こんにちは、${name}さん！`;
}

const akiraGreeting = greet("Akira");

console.log(akiraGreeting);

//課題２
function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

const a = 10;
const b = 2;

const subResult = substract(a, b);
const divideResult = divide(a, b);
const multiplyResult = multiply(a, b);

console.log(`${a} - ${b} = ${subResult}`);
console.log(`${a} / ${b} = ${divideResult}`);
console.log(`${a} * ${b} = ${multiplyResult}`);

//課題３
function isAdult(age) {
  if (age >= 20) {
    return `あなたは成人です`;
  } else {
    return `あなたは未成年です`;
  }
}

const age = 19;
const result = isAdult(age);
console.log(result);

//課題４
function logNTimes(fruit, n) {
  for (let i = 0; i < n; i++) {
    console.log(fruit);
  }
}

logNTimes("apple", 3);
