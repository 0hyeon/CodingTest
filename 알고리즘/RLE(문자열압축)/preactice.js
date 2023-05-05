function compress(string, n) {
  //n은 문자길이의 절반
  let result = "";
  let count = 1;
  let prev = string.slice(0, n); //n은 문자길의 절반

  for (let i = n; i <= string.length; i += n) {
    const current = string.slice(i, i + n); //2,4
    if (prev === current) {
      //0~2랑 2~4 ,4~6
      count++;
    } else {
      result += count > 1 ? count + prev : prev;
      count = 1;
      prev = current;
    }
  }
  result += count > 1 ? count + prev : prev;
  return result;
}

function solution(s) {
  let min = s.length;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const compressed = compress(s, i); //1~ i는 문자길이의 절반
    min = Math.min(min, compressed.length);
  }
  return min;
}
//총 10글자 2부터 5까지의 length를 비교함
solution("aabbaccc");
solution("ababcdcdababcdcd");
solution("abcabcdede");
solution("abcabcabcabcdededededede");
solution("xababcdcdababcdcd");
