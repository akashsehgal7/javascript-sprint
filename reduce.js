// array.reduce((accumulator, currentValue) => {
//   // logic
//   return updatedAccumulator;
// }, initialValue);



// let nums = [10, 20, 30];
// let total = nums.reduce((acc, val) => acc + val, 0);
// console.log(total); // 60



let chars = ['a', 'b', 'a', 'c', 'b'];
let count = chars.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 2, b: 2, c: 1 }



// let nested = [[1, 2], [3, 4], [5]];
// let flat = nested.reduce((acc, val) => acc.concat(val), []);
// console.log(flat); // [1, 2, 3, 4, 5]
