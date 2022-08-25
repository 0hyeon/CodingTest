function print_audd(x, y = 10) {
  console.log(x + y);
}

//js함수는 매개변수의 인수의 개수가 일치하는지 확인하지 않음
// 1.default value
print_audd(10, 20, 30); //30
print_audd(10, 20); //30
print_audd(10, 20); //20
print_audd(); //NaN

//2. dynamic parameters
function print_min() {
  console.log((arguments[0] = arguments[1]));
}

print_min(10, 20, 30); //-10
print_min(10, 20); //-10
print_min(10); //NaN
print_min(); //NaN
