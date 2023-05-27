function solution(lottos, win_nums) {
  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zeros = lottos.filter((zero) => zero === 0).length;
  const max = correct + zeros <= 1 ? 6 : 7 - (correct + zeros);
  const min = 7 - correct === 7 ? 6 : 7 - correct;
  return [max, min];
}
