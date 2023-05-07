// 등차수열을 이루는 4개의 숫자 카드를 받았는데, 한카드를 잃어버렸다. 잊어버린 카드를 찾아주자.

// 입력은 자연수로 된 3개의 숫자 카드를 받고, 한가지의 잃어버린 카드의 수를 반환한다.

// 단 잃어버린 카드는 가운데 숫자 카드로 한정한다.

// 예를들어 1,7,10을 입력받았을때
// 초항이 1이고, 두수의 차가 3인, 등차 수열 1,4,7,10을 찾아 4를 반환하도록 한다.
//기본템플릿

// user code
function answer(a, b, c) {
  let number = 0;

  //sort
  let num = [a, b, c];
  num.sort((x, y) => x - y);

  //1.get d -> 등차값 찾기
  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;
  //2.빈 index값 찾기
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;
  //3.이전값 +d
  number = num[0] + d * index;
  return number;
}

//main code
let input = [
  //TC: 1
  [1, 7, 10],
  //TC: 2
  [3, 8, 18],
  //TC: 2
  [2, 5, 11],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
