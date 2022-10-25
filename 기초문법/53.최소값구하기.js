//기본템플릿

// user code
function answer(x, y) {
  let result = "";
  result += x < y ? x : y;
  return result;
}

//main code
let input = [
  //TC: 1
  [16, 3],
  //TC: 2
  [-3, 1],
  //TC: 2
  [1000, 525],
];
for (let i = 0; i < input.length; i++) {
  //console.log(`#${i + i} ${answer(input[i][0])}`);
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
