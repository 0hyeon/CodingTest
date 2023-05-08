//입력된 값을 통해서 등차수열의 몇번째 항인지를 구하는 프로그램을 작성하시오.
//기본템플릿

// user code
function answer(a, d, n) {
  let index = -1;
  let num;
  //   for (let i = 1; ; i++) {
  //     num = a + b * (i - 1);

  //     //답을 찾지못함
  //     if (num > n) {
  //       index = -1;
  //       break;
  //     }

  //     //답을 찾음
  //     if (num == n) {
  //       index = i;
  //       break;
  //     }
  //     //console.log(num);
  //   }

  if ((n - a) % d == 0) {
    index = (n - a) / d + 1;
  } else index = -1;

  return index;
}

//main code
let input = [
  //TC: 1
  [1, 2, 7],
  //TC: 2
  [2, 3, 10],
  //TC: 2
  [3, 5, 23],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
