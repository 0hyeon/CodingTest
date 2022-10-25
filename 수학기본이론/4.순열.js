// [abc] 순열
//중복없이 순서에 상관있게

// 방법은 둘 for문과 재귀함수
// for문은 시간복잡도가 커서 보통 재귀로 돌린다.
let input = ["a", "b", "c"];
let count = 0;
//data,시작할위치,몇개를뽑을지
function permutation(arr, s, r) {
  //재귀함수를 멈춰야할 조건
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }
  //재귀를 통해서 변경되어야할부분 [메인로직]
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; //swap
    permutation(arr, s + 1, r); //다음요소를 선택해
    [arr[s], arr[i]] = [arr[i], arr[s]]; //swap원상복귀
  }
}

permutation(input, 0, 2); //data, 0번째부터시작, 두개뽑음(0,1,2)
console.log(count);
