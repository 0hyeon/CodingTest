//기본템플릿
// 두수 x,y를 입력받아 x의 y제곱값을 반환해주는 함수를 구현하시오.
//제곱 연산자(**)는 사용하지않는다.
// user code
function answer(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}

//main code
let input = [
  //TC: 1
  [2, 3],
  //TC: 2
  [4, 6],
  //TC: 2
  [1, 100],
];
for (let i = 0; i < input.length; i++) {
  //console.log(`#${i + i} ${answer(input[i][0])}`);
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
