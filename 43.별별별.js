// function answer(num) {
//   let result = "";

//   for (let i = 0; i < num; i++) {
//     result += "*";
//   }
//   return result;
// }

// answer(3);

//기본템플릿

// user code
function answer(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "*";
  }

  return result;
}

//main code
let input = [
  //TC: 1
  5,
  //TC: 2
  7,
  //TC: 2
  12,
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
// answer(10);
