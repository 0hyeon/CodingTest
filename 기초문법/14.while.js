// 무한 루프 수행시 많이 사용

// 조건에 대한 판단을 앞에서 하면 while 뒤에서 하면 do while
// 일반적으로 do while이  더많이 쓰인다. 일명 뺑뺑이

let i = 4;
while (i < 3) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
