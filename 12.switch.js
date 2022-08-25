// switch를 이용하여 1~7사이의 숫자를 입력받으면 요일을 출력해주는 코드를 작성하시오.
const day = 3;
let weekend = "";
switch (day) {
  case 1:
    weekend = "월요일";
    break;
  case 2:
    weekend = "화요일";
    break;
  case 3:
    weekend = "수요일";
    break;
  case 4:
    weekend = "목요일";
    break;
  case 5:
    weekend = "금요일";
    break;
  case 6:
    weekend = "토요일";
    break;
  default:
    weekend = "일요일";
    break;
}
console.log(weekend);
