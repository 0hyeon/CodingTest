//기본템플릿

// user code
function answer(a, b, c, d) {
  let result = "";

  if (a / b > c / d) {
    result = 1;
  } else if (a / b < c / d) {
    result = -1;
  } else {
    result = 0;
  }

  return result;
}

//main code
let input = [
  //TC: 1
  [14, 2, 6, 6],
  //TC: 2
  [6, 7, 8, 9],
  //TC: 2
  [18, 2, 36, 4],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2], input[i][3]));
}
