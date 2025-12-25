const drinks = ["coke", "tea", "water "];

console.log(`飲み物の数は${drinks.length}個です`);

drinks.push("coffee");

console.log(`最初の飲み物は${drinks[0]}`);
console.log(`2番目の飲み物は${drinks[1]}`);
console.log(`3番目の飲み物は${drinks[2]}`);

for (let i = 0; i < drinks.length; i++) {
  console.log(`${i + 1}番目の飲み物は${drinks[i]}です`);
}

const scores = [85, 75, 90, 85];
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += scores[i];
}

console.log(`合計点は${total}点です`);

const average = total / scores.length;
console.log(`平均点は${average}点です`);
