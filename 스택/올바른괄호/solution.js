function solution(s) {
  let count = 0;
  for (const el of s) {
    if (el === "(") {
      count += 1;
    } else {
      if (count === 0) {
        return false;
      }
      count -= 1;
    }
  }
  return count === 0;
}
