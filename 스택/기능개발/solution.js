function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]));
  let maxDay = days[0];
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }
  return answer;
}
