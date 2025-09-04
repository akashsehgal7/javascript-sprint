let nums = [1, 2, 3];
let newArr = [...nums, 99];
console.log(newArr); // [1, 2, 3, 99]



let arr = [10, 20, 30, 40];
let [first, ...rest] = arr;

console.log(first); // 10
console.log(rest);  // [20, 30, 40]
