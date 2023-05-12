function solution(nums) {
  const result = new Set(nums).size;
  const selectNum = parseInt(nums.length / 2);
  return result < selectNum ? result : selectNum;
}
