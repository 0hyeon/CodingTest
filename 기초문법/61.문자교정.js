<<<<<<< HEAD
// 우리 출판사는 출판되는 모든책의 단어들이 앞글자가 대문자로 표기되어야한다.

// 업무로 바쁜 동료를 위해, 원고의 단어 앞 글자를 모두 대문자로 변경시켜주는 함수를 구현하시오.

// 입력값은 문자형 형태의 단어들이며, 교정된 문자형으로 치환시켜 반환한다.
function answer(str) {
  let fix_str = "";

  //단어기준으로 나눈다.
  let tmp_list = str.split(" ");
  console.log(tmp_list);

  //단어의 앞철자를 대문자로 바꿔준다.
  //단어들을 다시 문장으로 변환한다.
  for (let item of tmp_list) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }

  return fix_str;
}
input = [
  "Hello, My name is john",
  "This week is closed due to COVID-19",
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`# ${i + 1} `);
  console.log(answer(input[i]));
=======
//입력값 각단어의 첫글자가 대문자
function answer(str) {
  let fix_str = "";
  // 1.단어기준으로 나눈다.
  let tmp_list = str.split(" ");

  for (let item of tmp_list) {
    // 2.단어와 앞철자를 대문자려 변환시켜준다.
    fix_str += item[0].toUpperCase() + item.slice(1) + " "; //앞글자만 대문자 + 잘라진것 붙여준것
  }
  // 3.단어들을 다시 문장으로 변환시켜준다.
  return fix_str;
}
input = [
  "Hello my name is john",
  "This week is closed duo to COVID-19",
  "fifty percent off this week",
];
for (let i = 0; i < input.length; i++) {
  console.log(`# ${i + 1} ${answer(input[i])}`);
>>>>>>> bcd9cf71ebe00e61605406e3674abec0623491e4
}
