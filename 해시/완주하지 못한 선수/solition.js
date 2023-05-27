function solution(participant, completion) {
  const map = new Map();
  participant.forEach((el) => {
    const data = map.get(el) || 0;
    map.set(el, data + 1);
  });
  completion.forEach((el) => {
    const data = map.get(el) || 0;
    map.set(el, data - 1);
  });
  for (const el of map) {
    if (el[1] > 0) return el[0];
  }
}
