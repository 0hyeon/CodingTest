//수열이 주어질때, 이수열의 수 중 최솟값의 위치를 모두 출력하는 프로그램을 작성하시오.
// 입력은 자연수로 된 배열로 받고, 시작위치는 0으로 계산하여, 최소값의 위치를 배열로 반환한다.
//모든수는 100이하의 자연수로 입력 받는다.
let input = [
  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [12, 11, 11, 16, 11, 12],
];
function answer(nums) {
  let result = [];

  let min = Number.MAX_SAFE_INTEGER;

  //최소값
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }
  //최소값에 해당하는 index반환
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) result.push(i);
  }
  return result;
}

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
