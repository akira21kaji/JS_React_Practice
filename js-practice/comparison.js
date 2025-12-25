const a = 7
const b = 5

console.log(` a === b → ${a === b}`) // false
console.log(` a !== b → ${a !== b}`) // true
console.log(` a > b → ${a > b}`) // true
console.log(` a < b → ${a < b}`) // false
console.log(` a >= b → ${a >= b}`) // true
console.log(` a <= b → ${a <= b}`) // false

const score = 80

console.log(`socoreは80点以上か → ${score >= 80}`) // true

const ageA = 20
const ageB = "20"

console.log(`ageA == ageB → ${ageA == ageB}`) // true
console.log(`ageA === ageB → ${ageA === ageB}`) // false

//===が推奨される理由は、文字列と数字が同列に扱われることで、データに数字情報と文字情報がルールなく混濁してしまう恐れがあるため