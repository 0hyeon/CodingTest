//배열을 입력받아 순서를 역으로 만들어 반환해주는 함수를 구현하시오.
//본 문제는 reverse함수를 이용하지 않고 반복문을 통해 구현한다.
//입력은 배열 형태로 값은 정수형과 문자형으로 구성되어있으며, 역으로 반환된 배열을 반환한다.
function answer(arr) {
  reverse = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }

  return reverse;
}
input = [
  [1, 2, 3, 4],
  [-1, 6, "hello", -15],
  ["apple", "banana", "mango"],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`# ${i + 1} `);
  console.log(answer(input[i]));
}
