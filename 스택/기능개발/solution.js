function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]));
  console.log(days);
  let maxDay = days[0];
}
