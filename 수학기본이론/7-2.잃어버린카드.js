// 등차수열을 이루는 4개에 숫자카드를 받았는데, 한카드를 잃어버렸다. 잊어버린 카드를 찾아주자.
// 입력은 자연수로 된 3개의 숫자카드를 받고 , 한가지의 잃어버린 카드의 수를 반환한다.
// 단 ,잃어버린 카드는 가운데 숫자카드로 한정한다.
// 예를들어 1,7,10 입력을 받았을때
// 초항이 1 이고 , 두수의 차가 3인 ,등차수열 1,4,7,10을 찾아 4를 반환하도록 한다.
let input = [
  [1, 7, 10],
  [3, 8, 18],
  [2, 5, 11],
];
function answer(a, b, c) {
  let number = 0;
  //   sort
  num = [a, b, c];
  num.sort((x, y) => x - y);

  //get d
  let d = 0;
  for (let i = 0; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  //   get location
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;
  //   calc number
  number = num[0] + d * index;
  return number;
}

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
