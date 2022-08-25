//반복물 for을 이용하여 0~10까지의 정수 중 짝수의 합을 구한뒤 출력해주는 코드를 작성하시오.

const UNTIL_NUM = 10;
let sum = 0;

for (i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 == 0) sum += i;
}

console.log(sum);

//반복문 FOR2개를 이용하여 2~9단까지 출력해주는 코드를 작성해주시오.

for (i = 2; i <= 9; i++) {
  for (j = 1; j <= 9; j++) {
    console.log(`${i} X ${j}= ${i * j}`);
  }
  console.log(i + "단_________________");
}
