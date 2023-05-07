//얕은 복사 해결방법
// 1.반복분 for문을 통한 객체복사
//일일히 한땀한땀 복사하는 방법
let user = {
  name: "John",
  age: 23,
};
let admin = {}; //shallow copy

for (let key in user) {
  admin[key] = user[key];
}
admin.name = "park";
console.log(admin.name); //"park"
console.log(user.name); //"John"

//2.Object.assing()함수를 이용한 복사
let admin_obj = Object.assign({}, user);
admin_obj.name = "park";
console.log(admin_obj.name);
console.log(user.name);

//3. 전개연산자 스프레드를 통한복사
let admin_spread = { ...user };
admin_spread.name = "park";
console.log(admin_spread.name);
console.log(user.name);

//얕은복사의 문제점 : 객체 내 또다른 객체가 있다면 복사되지않기 때문에 깊은 복사를 함 안에 오브젝트는 또다른 주소를 복사하기 때문에

//깊은복사
//1. 재귀함수(for문)를 이용한 깊은 객체복사
//생략

//2.Json객체로 한줄로 간단하게 가능
//stringify는 오브텍트를 문자열로 변환 그걸 다시 json 오브젝트로 새롭게 만들어줌
let admin_json = JSON.parse(JSON.stringify(user));
admin_json.name = "park";
console.log(admin_json.name);
console.log(user.name);

// 객체 복사 문제점

// object복사는 대상 전체가 아니라 메모리 주소값만 복사되기때문에
// let admin = user 할때 (메모리내에 )같은공간을 가리키며 복사가 된다.
// 그렇기 때문에 admin.age를 변경 하면 user.age도 변경된다.
