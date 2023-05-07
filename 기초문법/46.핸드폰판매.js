//업무성과를 보상해주기위해, 가장 핸드폰을 많이 판매한 종업원에게 인센티브를 부여하고자한다.
//핸들폰 판매 수량을 입력받아서, 가장 많이 판매한 종업원 번호를 반환해주는 함수를 작성하시오.
//입력은 배열형태로 종업원 별 판매수량 값이 주어지며, 가장 많이 판매한 번호를 반환한다.

//기본템플릿

// user code
function answer(employee) {
  let employee_id;

  let max = 0;

  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i];
      employee_id = i + 1;
    }
  }

  return employee_id;
}

//main code
let input = [
  //TC: 1
  [3, 7, 9, 6, 1], //해당지점 직원들의 판매목록 5명이 각각 판매한목록
  //TC: 2
  [2, 7, 1, 4, 3, 0, 5],
  //TC: 2
  [7, 5, 0, 1, 2, 12, 6],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
