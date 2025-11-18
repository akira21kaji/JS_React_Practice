// setTimeout(() => {
//   console.log(`Step1`);
//   setTimeout(() => {
//     console.log(`Step2`);
//     setTimeout(() => {
//       console.log(`Step3`);
//     }, 300);
//   }, 300);
// }, 300);

const step1 = (next) => {
  console.log(`Step1`);
  setTimeout(next, 3000);
};
const step2 = (next) => {
  console.log(`Step2`);
  setTimeout(next, 3000);
};
const step3 = () => {
  console.log(`Step3`);
};

setImmediate(() => step1(() => step2(step3)), 3000);
