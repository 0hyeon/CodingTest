// 방법1
function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));
  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });
  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}

// 방법2
function solution(survey, choices) {
  const types = ["RT", "CF", "JM", "AN"];
  const hash = new Map();
  types.forEach((type) => type.split("").forEach((el) => hash.set(el, 0)));
  choices.forEach((choice, idx) => {
    const [disagree, agree] = survey[idx];
    const score = Math.abs(choice - 4);
    const key = choice > 4 ? agree : disagree;
    hash.set(key, hash.get(key) + score);
  });
  return types
    .map((el) => (hash.get(el[1]) > hash.get(el[0]) ? el[1] : el[0]))
    .join("");
  //return types.map(([a, b]) => (hash.get(b) > hash.get(a) ? b : a)).join("");
}
