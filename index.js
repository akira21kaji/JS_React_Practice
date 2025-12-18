//変数に型をつける
var age = 25;
var userName = "Taro";
var isStudent = true;
console.log("\u5E74\u9F62\u306F".concat(age, "\u3067\u3059"));
console.log("\u540D\u524D\u306F".concat(userName, "\u3067\u3059"));
console.log("\u5B66\u751F\u3067\u3059\u304B\uFF1F".concat(isStudent, "\u3067\u3059"));
//関数の引数と戻り値に型をつける
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
//間違った型を代入しようとするとコンパイルエラー
// let price: number = 100;
// price = "高い";
