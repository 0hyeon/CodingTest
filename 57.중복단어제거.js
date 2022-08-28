//기본템플릿

// user code
function answer(str) {
  let result = [];

  //1.
  //result = Array.from(new Set(str)); //from메서드 :  리터럴 객체를 얕은복사

  //2.
  new Set(str).forEach((item) => {
    result.push(item);
  });

  return result;
}

//main code
let input = [
  //TC: 1
  ["john", "alice", "alice"],
  ["Hello", "hello", "HELLO", "hello"],
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];
for (let i = 0; i < input.length; i++) {
  //   console.log(`#${i + 1} ${answer(input[i])}`);
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
