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
}
