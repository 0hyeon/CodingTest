//고객이 평행한 직사각형을 만들기 위해 3점을 선택한 후 네번째 점을 구하는데 고생하고있다.
//고객을 도와 네번째 점을 구하는 함수를 만드시오.
//입력값은 x좌표3개, y좌표 3개가 각각 배열로 입력되며, 네번째점 [x,y]를 산출하여 반환한다.

//기본템플릿

// user code
function answer(v) {
  let result = [];

  //   if (x_arr[0] == x_arr[1]) result[0] = x_arr[2];
  //   else if (x_arr[0] == x_arr[2]) result[0] = x_arr[1];
  //   else if (x_arr[1] == x_arr[2]) result[0] = x_arr[0];

  //   if (y_arr[0] == y_arr[1]) result[1] = y_arr[2];
  //   else if (y_arr[0] == y_arr[2]) result[1] = y_arr[1];
  //   else if (y_arr[1] == y_arr[2]) result[1] = y_arr[0];

  //   if (x_arr[0] == [x_arr[1]]) {
  //     result[0] = x_arr[2];
  //   } else if (x_arr[0] == [x_arr[2]]) {
  //     result[0] = x_arr[1];
  //   } else if (x_arr[1] == [x_arr[2]]) {
  //     result[0] = x_arr[0];
  //   }

  //   if (y_arr[0] == [y_arr[1]]) {
  //     result[1] = y_arr[2];
  //   } else if (y_arr[0] == [y_arr[2]]) {
  //     result[1] = y_arr[1];
  //   } else if (y_arr[1] == [y_arr[2]]) {
  //     result[1] = y_arr[0];
  //   }

  result[0] = v[0][0] ^ v[1][0] ^ v[2][0]; //x값
  result[1] = v[0][1] ^ v[1][1] ^ v[2][1]; //y값
  //^ xor 연산자는 값이 다를때 참을반환
  return result;
}

//main code
let input = [
  [
    [1, 4],
    [3, 4],
    [3, 10],
  ],
  [
    [1, 1],
    [2, 2],
    [1, 2],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
