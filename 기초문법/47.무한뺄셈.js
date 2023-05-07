//두 자연수를 입력받아 앞의 숫자에서 뒤의 숫자를 뺄셈하며
//반복 연산하는 프로그램을 작성하시오.
//입력은 두 자연수가 주어지며, 연산과정을 보여주기
//촉디 엽력된 수를 포함하여 뺄셈을 통해 나온 숫자 모두를 배열에 저장하여 반환한다.
//예를 들어 두수 6,3이 입력 값을 주어졌을때,
// 6-3=3 , 3-3=0 , 0-3=-3 순으로 계산되고, -3이 되었으므로 프로그램은 종료된다
//이때 배열로 반환되는 숫자는 [6,3,3,0,3]이 된다.

// user code
function answer(s, e) {
  let sequence = [];
  let sum;
  sequence.push(s);
  sequence.push(e); //[9,3]
  while (1) {
    //1 == true
    sum = s - e; // 6 = 9 - 3
    s = e; //첫번째 자리는 둘째놈이고
    e = sum; //두번째자리는 새놈에게 물려준다.    3-6
    if (e < 0) break;
    sequence.push(sum); //[9, 3, 6]
  }

  return sequence;
}

//main code
let input = [
  //TC: 1
  [9, 3],
  //TC: 2
  [6, 3],
  //TC: 2
  [13, 7],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}
