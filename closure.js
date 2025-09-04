// function abcd(){
//     let val = 0;
//     return function(){
//         console.log(val)
//     };
// }

// const printVal = abcd();
// printVal();



function abcd() {
  let val = 0;
  return function() {
    val++;
    console.log(val);
  };
}

const counter = abcd();
counter(); // 1
counter(); // 2
counter(); // 3
