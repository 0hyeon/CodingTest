// 서로 다른 n개의 원소 중에서 r를 중복없이 골라 순서에 상관
// 나열하는 경우의수 3개의 알파벳으로 단어를 만드는 경우의 수

let Input = ["a", "b", "c"];
let Count = 0;

// 주의사항
// 1. 재귀함수를 멈춰야 할 조건
// 2. 재귀를 돌면서 변경되어야 할 부분 / 메인로직
function permutation(arr, s, r) {
  // = r은 도착해야할 인덱스
  // s가 r에 도달하면 Count 값을 증가 - 콘솔로 배열 상태 확인

  if (s == r) {
    Count++;
    console.log(arr.join(" ")); // join 메서드 -> 문자열로 변환
    return;
  }
  // 1. -> 재귀에 대한 break 역할을 하는 부분

  // 선택된것을 뽑지 않으려고 0 대신 s부터로 지정
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap

    // AA = AA
    // 첫번째 요소는 선택 했으니 두번째 요소를 선택 -> s + 1
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap 원상복귀

    /*
    s = 0, r = 2  ["a", ]
    s = 1, r = 2  ["a", "b", ]
    s = 2, r = 2  ["a", "b", "c"]
    --> 위 for문과 출력되는 값은 동일함
    */
  }
  //console.log(arr);
}

permutation(Input, 0, 2); // 0번부터 2번까지(3개) 뽑는다.
console.log(Count);
