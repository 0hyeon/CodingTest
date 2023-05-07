// 고객이 ATM기기를 사용하려한다. ATF기기는 5만원 지폐밖에 사용하지않아
// 5배수 금액만 취급한다. 그리고 인출할때 0.5만원의 수수료가 필요하다.
// 인출할 금액과 계좌의 총 금액을 입력 받아 계좌의 남은 금액을 반환하는 함수를 작성하시오.
// 입력값중 첫번째 값은 인출할 금액이고, 두번째 값은 계좌의 금액이다.
// 단 정상적인 인출이 불가능할 경우 돈은 출금되지 않고, 통장의 원래 금액을 반환한다.

// user code
function answer(cost, nowMoney) {
  let lastMoney = "";
  if (cost % 5 == 0 && cost + 0.5 < nowMoney) {
    lastMoney = nowMoney - cost - 0.5;
  } else {
    lastMoney = nowMoney;
  }
  return lastMoney;
}

//main code
let input = [
  //TC: 1
  [40, 130],
  [33, 130],
  [300, 300],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
