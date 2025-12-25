//課題１

let count = 0;
while (count < 10) {
  console.log(`countは${count}`);
  count++;
}

//課題２
let i = 1;
let total = 0;

while (i <= 100) {
  total += i;
  i++;
}
console.log(`1から100までの合計は${total}`);

//課題３
let looping = true;
let loopCount = 0;

while (looping) {
  console.log("ループ中....");
  loopCount++;
  if (loopCount >= 5) {
    looping = false;
    console.log("ループを終了しました。");
  }
}

//課題４
