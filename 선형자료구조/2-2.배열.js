// 배열 요소 삭제 변경
let fruits = ["apple", "orange", "melon"];
console.log(fruits.splice(1)); //[ 'orange', 'melon' ]// 1이후 뒤쪽이 모두 삭제가됨
console.log(fruits); //[ 'apple' ]

fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1, 1)); //[ 'orange' ] // 1에서부터 1개만삭제
console.log(fruits); //[ 'apple', 'melon', 'strawberry' ]

console.log(fruits.splice(1, 1, "mango", "kiwi")); //[ 'melon' ]
console.log(fruits); //[ 'apple', 'mango', 'kiwi', 'strawberry' ]

// slice는 원본보존하면서 짜름
//splice는 원본파괴

// 배열과 배열을 병합하고 싶을땐 concat
console.log(fruits.concat("tropicana"));
console.log(fruits.concat(["cheery", "coconut"]));

//배열 반복문
// 1. length접근 반복문
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//2. elements접근
for (let fruit of fruits) {
  console.log(fruit);
}

//3 key접근
for (let key in fruits) {
  console.log(fruits[key]);
}

//배열탐색
fruits3 = ["apple", "orange", "melon", "strawberry", "orange"];
console.log(fruits3.indexOf("orange")); //있으면 1
console.log(fruits3.indexOf("Orange")); //없으면 -1
console.log(fruits3.indexOf("orange", 2)); //4

// lastindexOf => 뒤쪽부터 탐색 음수값으로도 찾을수 있음
console.log(fruits3.lastIndexOf("orange", -2)); //4

//include는 true false 반환
console.log(fruits3.includes("orange")); //true

//배열 정렬 sort, revese메서드 (오름차순,내림차순)
let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort());
console.log(nums.reverse());

//join
let str = fruits3.join(); //하나의 string으로 합쳐줌
console.log(str);
let str_seperate = fruits3.join(";"); // , 빼고 ;로 바꿔줌 배열을 문자열로
console.log(str_seperate);

const result = str_seperate.split(";"); //다시 문자열을 배열로 ,나누는 기준은 따옴표사이의것
console.log(result);

// sort메서드 이용시 십의자리 이후로는 정렬이 되지않는다
let nums3 = [1, -1, 4, 0, 10, 20, 12];
console.log(nums3.sort()); //-1 0 1 10 12 20 문제발생
console.log(nums3.reverse());

let assending_sort = (x, y) => {
  return x - y;
};
let disending_sort = (x, y) => {
  return y - x;
};
console.log(nums3.sort(assending_sort));
console.log(nums3.sort(disending_sort));

//for each
let nums7 = [1, 2, 3];
for (let i = 0; i < nums7.length; i++) {
  console.log("nums7[i] : ", nums7[i]);
}

// 이것은 밑에와 같다
nums7.forEach((i) => {
  console.log("nums7[i] forEach : ", i);
});

nums7.map((i) => {
  console.log("nums7[i] map : ", i);
});

// forEach 메서드는 원본 배열을 변경하지 않는다.
// forEach 메서드의 반환값은 언제나 undefined다.

//filter 만족하는 모두를 리턴
let users = [
  { name: "Blob", age: 17, job: false },
  { name: "jayz", age: 20, job: true },
  { name: "alina", age: 23, job: true },
];
let fiter_users = users.filter((user) => {
  return user.age > 19;
});

console.log(fiter_users);

//find 만족하는 단하나를 리턴
let fiter_users2 = users.find((user) => {
  return user.age > 19;
});

console.log(fiter_users2);

//filter 후 find
let fiter_users9 = users
  .filter((user) => {
    return user.age > 19;
  })
  .find((user2) => {
    return user2.name;
  });
console.log("fiter_users9 : ", fiter_users9);

//some 단하나라도 만족하면 true or false
let someJob = users.some((user) => {
  return user.job == true;
});
console.log("someJob : ", someJob);
//every는 모두가 조건이 만족되어야 true 아니면 false
let everyAge = users.every((user) => {
  return user.age > 18;
});
console.log("everyAge : ", everyAge);
