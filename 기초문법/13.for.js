// 반복문 확장(for)
// 1.for in 문
//객체의 키 key,value형태를 반복해서 수행하는데 최적화 된유형
// 첫번째부터 마지막까지, 객체의 키 개수만큼 반복
//for...in은 객체의 반복에서 사용된다.
//Syntax
// for (key in object) {
//   //code block to be executed
// }
//example
const person = { fname: "John", lname: "Bob", age: 25 };
let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

// 2. for ..of 반복해서
// collection 객체 자체가 symbol.iterator속성을 가지고 있어야 동작가능한 유형
// es6에 새로추가된 컬렉션 기반의 반복구문
// Syntax
// for (variable of iterator) {
//for...of 는 배열의 반복에서 사용되고/
// }

// ex
let language = "Javascript";
let text_2 = "";

for (let x of language) {
  text_2 += x;
  console.log(x);
}
console.log(text_2);
