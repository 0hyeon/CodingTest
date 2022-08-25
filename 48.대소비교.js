//기본템플릿

// user code
function answer(x, y) {
  let result = "";

  if (x < y) {
    return "<";
  } else if (x > y) {
    return ">";
  } else {
    return "=";
  }
  return result;
}

//main code
let input = [
  //TC: 1
  [3, 5],
  //TC: 2
  [7, 4],
  //TC: 2
  [2, 2],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}
