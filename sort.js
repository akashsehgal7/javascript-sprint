
let arr = [10, 2, 30];
arr.sort((a, b) => a - b);
console.log(arr); // [2, 10, 30]


let users = [
  { name: "Akash", score: 80 },
  { name: "Babu", score: 95 },
  { name: "Janu", score: 70 }
];

users.sort((a, b) => b.score - a.score);

console.log(users);