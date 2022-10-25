//본 놀이기구는 안전상의 이유로 키 150cm 이상만 탈수 있다.
// 탑승하려는 고객이 놀이기구를 탈수있는지 판단하는 함수를 구현하시오.
//입력값은 객체로 이름/나이/키가 입력되며, 출력값은 탑승가능시 true,불가능시 false를 반환한다.
function answer(user) {
  let result;

  //   result = user.height >= 150;

  if (user.height >= 150) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

//main code
let input = [
  //TC: 1
  { name: "john", age: 27, height: 181 },
  { name: "alice", age: 12, height: 148 },
  { name: "bob", age: 14, height: 156 },
];
for (let i = 0; i < input.length; i++) {
  //console.log(`#${i + i} ${answer(input[i][0])}`);
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
