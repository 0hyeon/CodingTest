// 0.배열?
// 여러 개체값을 순차적으로 나열한 선형자료구조

// 1.배열을 사용하는이유?

// 동일한 배열명을 가지고 같은속성의 값들을 저장하기 위해
// 만약 과일이라는 변수명을 가지고 관련된 엘리먼트를 저장한다고했을때 그안에 과일을 넣으면
// 좀 더 관리하기 편하기 때문

//배열선언
let arr_1 = new Array(10); //사이즈지정
let arr_2 = []; //초기화
// 배열은 빅O(1)을 통해 접근하여 매우 빠른 자료구조여서 알고리즘에 자주쓰임
let fruits = ["apple", "orange", "melon"];

console.log(
  //배열확인
  Array.isArray(fruits) //true
);

//배열삭제
delete fruits[1];
console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ]

//delete시 length는 그대로인 문제점

//배열조작
// push, pop, shift, unshift;

//뒤쪽에서 넣고
ret = fruits.push("watermelon");
console.log(fruits);
console.log(ret);
//뒤쪽에서 빠짐
ret = fruits.pop();
console.log(fruits);
console.log(ret);

//shift 앞쪽에서 빠지기
ret = fruits.shift();
console.log(fruits);
console.log(ret);
//unshift앞쪽에 추가
ret = fruits.unshift("watermelon");
console.log(fruits);
console.log(ret);
