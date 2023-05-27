//수열이 주어질때, 이수열의 있는 수중 최소값의 위치를 모두 출력하는 프로그램을 작성하시오.

//입력은 자연수로 된 배열을 받고, 시작 위치는 0로 계산하여 최소값의 위치를 배열로 반환한다.

//모든수는 100이하의 자연수로 입력받는다.
function answer(nums) {
  let result = [];
  let min = Number.MAX_SAFE_INTEGER; //높은값으로해야 작동
  //   1.최솟값
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i]; //수정
    }
  }
  //   2.최소값에 해당하는 위치 index
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      //제일 작은값이면,
      //count 다음값부터 ++
      //result 의 [index] = i의 순서넣기
      result[count++] = i;
    }
  }
  return result;
}

//main code
let input = [
  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`# ${i + 1} `);
  console.log(answer(input[i]));
}
