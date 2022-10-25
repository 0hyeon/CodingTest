//기본템플릿

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
