// 2차원 배열을 입력 받아 모든 요소를 곱한 값을 반환해주는 함수를 구현하시오.
// 입력값은 2차원 배열로 Number 자료형 값이 들어오며, 모든 요소를 곱한 값을 반환해준다.
//기본템플릿

// user code
function answer(num) {
  let result = 1; //정답이곱한값일경우

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
      result *= num[i][j];
    }
  }
  return result;
}

//main code
let input = [
  [[1], [2], [3]],
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
