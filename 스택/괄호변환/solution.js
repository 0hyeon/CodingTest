function reverse(str) {
  //문자열뒤집기함수
  console.log("str : ", str);
  return str
    .slice(1, str.length - 1) //처음과 마지막글자를 제외하고,
    .split("") //문자열 뒤집으려면,배열화 하여야
    .map((c) => (c === "(" ? ")" : "(")) // "반대로 바꿔주고"
    .join(""); //합치기
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0; //열린괄호의 수에서 닫힌괄호의 수를 뺀값
  let pivot = 0; //문자열에서 현재까지 탐색한 인덱스

  while (pivot < p.length) {
    balance += p[pivot++] === "(" ? 1 : -1;
    if (balance === 0) break;
  }
  //balance가 0이 되는 시점에서 while 루프를 종료하고, 그 때의 pivot 값을 이용하여 문자열 p를 u와 v로 나눕니다.
  const u = p.slice(0, pivot); //균형잡힌문자열
  //u 변수는 문자열 p를 균형잡힌 괄호 문자열로 분리한 결과물입니다. slice 함수를 이용하여 문자열 p의 처음부터 pivot 인덱스까지 자른 문자열을 u에 저장합니다.
  const v = solution(p.slice(pivot, p.length)); //나머지 균형잡힌문자열이 아닐수도
  //v 변수는 문자열 p에서 u를 제외한 나머지 문자열을 균형잡힌 괄호 문자열로 분리한 결과물입니다. 이때, 재귀적으로 solution 함수를 호출하여 v를 구합니다.
  if (u[0] === "(" && u[u.length - 1] == ")")
    //올바른문자열인지 체크
    //u 문자열의 첫 번째 문자가 "("인 경우 u 문자열의 마지막 문자가 ")"인 경우
    //위에서 ()를 날리니까 감싸준다.
    return u + v; //마지막으로 u 변수가 올바른 괄호 문자열이라면 u + v를 반환
  else return "(" + v + ")" + reverse(u); //U가 올바른 문자열이 아닌경우,
  //그렇지 않은 경우에는 reverse(u)와 "(" 그리고 v 그리고 ")"를 이어붙인 문자열을 반환합니다. 이때 reverse 함수는 주어진 문자열을 뒤집는 함수입니다.
}
