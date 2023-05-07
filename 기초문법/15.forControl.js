// break, continue예제

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text = text + i;
}
console.log(text); //012

text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text += i;
}

console.log(text);

// Lable 예제

// 0  * 0 = 0
// 1  * 0 = 0
// 2  * 0 = 0
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j);
    break;
  }
  //상위 포문 한바퀴돌음
}

// 0 * 0 = 0
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j);
    break end;
    //상위 포문도 돌지 않고 전체를 멈춰버림
  }
}
