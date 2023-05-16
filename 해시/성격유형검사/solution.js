function solution(survey, choices) {
  const MBTI = new Map();
  const types = ["RT", "CF", "JM", "AN"]; //주도 return, map set get 이게 모든유형

  types.forEach((type) => type.split("").forEach((char) => MBTI.set(char, 0)));
  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    const score = Math.abs(choice - 4);
    const key = choice > 4 ? agree : disagree;
    MBTI.set(key, MBTI.get(key) + score);
  });
  return types.map(([a, b]) => (MBTI.get(b) > MBTI.get(a) ? b : a)).join("");
}

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
