// [abc] 순열
//서로다른 n개들이 중복없이 순서에 상관있음

// 1234의 순열 두가지 뽑는
// [1,2],[1,3],[1,4],[2,3],[2,4],[3,4]

let input = [1, 2, 3, 4];
let output = [];
let count = 0;
function combination(arr, data, s, idx, r) {
  if (s == r) {
    count++;
    console.log(data);
    return;
  }
  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i]; //뽑은애를 저장하고
    combination(arr, data, s + 1, i + 1, r);
    // 스타팅 + 1, 인덱싱 + 1;
  }
}
combination(input, output, 0, 0, 2);
console.log(count);
