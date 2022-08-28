//날짜를 입력받아 요일을 반환해주는 함수를 구현하시오.
//입력값은 문자형 날짜(datestring)값이 되며, 문자형 형태의 요일을 반환한다.
function answer(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  let day;

  let date = new Date(str);
  //   console.log("date", date); //2021-01-27T00:00:00.000Z

  day = week[date.getDay()];
  //   console.log("date.getDay()", date.getDay()); //3

  //   console.log("week[date.getDay()]", week[date.getDay()]); //수요일 week[3]
  return day;
}

//main code
let input = [
  //TC: 1
  "2021-01-27",
  "2021-02-27",
  "2021-03-14",
];
for (let i = 0; i < input.length; i++) {
  //console.log(`#${i + i} ${answer(input[i][0])}`);
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
