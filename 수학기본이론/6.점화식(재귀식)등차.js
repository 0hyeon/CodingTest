// 이웃하는 두개의 항사이에 성립하는관계를 나타냄

// 등차수열 for문
let result;

function forloop(s, t, number) {
  let acc = 0;
  for (let i = 1; i <= number; i++) {
    if (i == 1) acc += s;
    else acc += t;
    console.log(i, acc);
  }
  return acc;
}

result = forloop(3, 2, 5); //초기값,등차값,반복횟수
console.log(result);
