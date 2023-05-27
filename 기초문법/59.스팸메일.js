// 최근스팸메일이 급증하여, 메일 업무처리에 지장이 생겼다.
// 대소문자를 구분하지 않고 Advert로 시작하는 메일 제목은 스팸 처리하는 함수를 구현하시오.
// 입력값은 문자형이며, 출력값은 스팸으로 판단할경우 true,아닐경우 false를 반환한다.

function Answer(str) {
  result = "";
  //1. 소문자로 변환
  result = str.toLowerCase();
  //console.log(str);

  //2. advert단어가 매일 제목내 포함되는지 판단할경우
  result = str.includes("advert");
  return result;
}

let input = [
  "RE:Request documents",
  "[Advertisement]free mobile!",
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`# ${i + 1} `);
  console.log(Answer(input[i]));
}
