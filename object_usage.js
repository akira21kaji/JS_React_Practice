const user = {
  name: "Akira",
  age: 34,
  hobby: "soccer",
  address: {
    home: "Gifu",
    favorite: "Tokyo",
  },
  friends: [
    { name: "Yuichi", age: 35 },
    { name: "Haruki", age: 34 },
    { name: "Shinya", age: 36 },
  ],
};

console.log(`名前は${user.name}です`);
console.log(`年齢は${user.age}です`);
console.log(`趣味は${user.hobby}です`);

console.log(`住所は${user.address.home}です`);
console.log(`好きな場所は${user.address.favorite}です`);

for (let i = 0; i < user.friends.length; i++) {
  console.log(
    `私の友達の${i + 1}番目の人の名前は${user.friends[i].name}で、年齢は${
      user.friends[i].age
    }歳です`
  );
}

user.age = 35;

console.log(`1年後の年齢は${user.age}です`);

const users = [
  { name: "Yuichi", age: 35 },
  { name: "Haruki", age: 34 },
  { name: "Shinya", age: 36 },
];

for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].name}は${users[i].age}歳です`);
}
