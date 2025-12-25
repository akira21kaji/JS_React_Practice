//課題１
for (let i = 0; i < 10; i++) {
  console.log(`今のiは${i}`);
}

//課題２ 0 から 9 までの数字の中で、偶数だけを表示してください。（if文も使用する）
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(`偶数は${i}`);
  }
}

//課題３
let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}

console.log(`1から100までの合計は${total}`);

//課題４
for (let i = 1; i <= 10; i++) {
  console.log(`HELLO! ${i}回目`);
}

//課題５
for (let i = 0; i < 10; i += 2) {
  console.log(`0から9までの偶数は${i}`);
}
