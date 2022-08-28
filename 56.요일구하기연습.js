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

  let day; //1234

  let date = new Date(str);
  let day_num = date.getDay();
  console.log(day_num);
  day = week[day_num];

  return day;
}

let input = ["2021-01-27", "2021-02-27", "2021-03-14"];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i} ${answer(input[i])}`);
}
