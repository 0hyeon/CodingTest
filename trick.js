//1.구조분해 할당을 이용한 변수 swap
let a = 5,
  b = 10;
[a, b] = [b, a];
// console.log(a, b); //10 5

//2.배열 생성으로 루프 제거하기
let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}
// console.log("sum : ", sum);
//만약 범위 루프를 함수형 프로그래밍방식으로 사용하고싶다면 배열을 생성해서 사용할 수 있다.

// console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

// console.log(Array.from(new Array(5), (_, k) => k + 5));
const sumFn = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (acc, cur) => acc + cur,
  0
);
// console.log("sumFn :", sumFn);

//3. 배열 내 같은 요소 제거하기
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const onlySet = new Set(names); //중복제거된 set객체가 나옴 사용하려면 Array.from 필요
// console.log(onlySet); //Set(3) { 'Lee', 'Kim', 'Park' }
new Set(names);
const uniqueNamesWithArrayFrom = Array.from(new Set(names));

//4.Spread 연산자를 이용한 객체 병합
const person = {
  name: "Lee sun-hyup",
  familyName: "Lee",
  givenName: "sun-hyup",
};
const company = {
  name: "Cobalt. Inc.",
  address: "Seoul",
};

const leeSunHyoup = { ...person, ...company };
console.log(leeSunHyoup); //같은 키는 마지막에 대입된 값으로 정해진다.

//5. &&와 || 활용
// &&와 ||는 조건문 외에서도 활용될 수 있습니다.

/// ||
// 기본값을 넣어주고 싶을 때 사용할 수 있습니다.
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당됩니다.
const name = participantName || "Guest";

/// &&
// flag가 true일 경우에만 실행됩니다.
flag && func();

// 객체 병합에도 이용할 수 있습니다.
const makeCompany = (showAddress) => {
  return {
    name: "Cobalt. Inc.",
    ...(showAddress && { address: "Seoul" }),
  };
};
console.log(makeCompany(false));
// { name: 'Cobalt. Inc.' }
console.log(makeCompany(true));
// { name: 'Cobalt. Inc.', address: 'Seoul' }

//6. 구조 분해 할당 사용하기
const person2 = {
  name: "Lee Sun-Hyoup",
  familyName: "Lee",
  givenName: "Sun-Hyoup",
  company: "Cobalt. Inc.",
  address: "Seoul",
};
const { familyName, givenName } = person;

const name2 = "Lee Sun-Hyoup";
const company2 = "Cobalt";
const person3 = {
  name,
  company,
};
console.log(person);
// {
//   name: 'Lee Sun-Hyoup'
//   company: 'Cobalt',
// }
