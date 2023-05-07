function compress(string, n) {
  let result = "";
  let count = 1;
  let prev = slice(0, n);
  for (let i = n; i <= string.length; i += n) {
    //2,10 or 5/10 생각하면서 코딩짜기
    const current = string.slice(i, i + n);
    if (prev === current) {
      count++;
    } else {
      //다른거나올때
      result += count > 1 ? count + prev : prev;
      count = 1; //reset
      prev = current; //prev갱신
    }
  }
  result += count > 1 ? count + prev : prev;
  return result;
}
function solution(s) {
  let min = s.length;
  for (let i = 1; i < Math.floor(s.length / 2); i++) {
    let compressed = compress(s, i); //반복하면서 compressed업데이트
    min = Math.min(min, compressed.length);
    return min;
  }
}
