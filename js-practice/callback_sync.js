const nums = [1, 2, 3, 4];

nums.forEach((n, i) => {
  console.log(`index: ${i}, value: ${n}`);
});

const doubled = nums.map((n) => n * 2);
console.log(doubled);
