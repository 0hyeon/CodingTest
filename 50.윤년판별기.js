//기본템플릿

// user code
function answer(x) {
  let result = "";

  if (x % 4 == 0 && x % 100 != 0) {
    result = true;
  } else if (x % 400 == 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

//main code
let input = [
  //TC: 1
  4, 100, 124, 247, 400,
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
