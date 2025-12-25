//課題１

const greet = (name) => `こんにちは、${name}さん！`;

console.log(greet("Akira"));

//課題２
const substract = (a, b) => a - b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;

const a = 10;
const b = 2;

console.log(`${a} - ${b} = ${substract(a, b)}`);
console.log(`${a} / ${b} = ${divide(a, b)}`);
console.log(`${a} * ${b} = ${multiply(a, b)}`);

//課題３

const isAdult = (age) => {
  if (age >= 20) {
    return `あなたは成人です`;
  } else {
    return `あなたは未成年です`;
  }
};

const age = 19;
console.log(isAdult(age));

//課題４

const logNTimes = (fruit, n) => {
  for (let i = 0; i < n; i++) {
    console.log(fruit);
  }
};

console.log(logNTimes("apple", 3));
