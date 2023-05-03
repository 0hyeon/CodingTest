function compress(s, n) {
  let result = "";
  let count = 1;
  let prev = s.slice(0, n);

  for (let i = n; i <= s.length; i += n) {
    const current = s.slice(i, i + n);
    if (prev === current) {
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
    const compressed = compress(s, i);
    min = Math.min(min, compressed.length);
  }
  return min;
}

// RLE(Run-Length Encoding) 알고리즘은 데이터를 압축하는 기법 중 하나로, 연속적으로 중복된 데이터를 특정 규칙에 따라 압축하는 방식입니다.

// 주어진 문자열 s를 i개씩 나누어 연속된 문자열을 찾아 압축하는 방식으로 구현되어 있습니다. 이때, i는 문자열을 나누는 크기로, 문자열을 나누는 크기가 작을수록 압축률이 높아집니다.

// compress 함수에서는 연속된 문자열을 압축하기 위해 현재 문자열과 이전 문자열을 비교하고, 같은 문자열의 수를 count로 카운트해 압축합니다. 이때, 연속된 문자열이 끝날 때마다 현재까지 카운트된 문자열의 개수와 이전 문자열을 조합하여 압축된 문자열을 생성합니다.

// solution 함수에서는 주어진 문자열 s를 i개씩 나누어 연속된 문자열을 찾아 compress 함수를 호출하여 압축된 문자열을 구하고, 구한 문자열의 길이 중 최소값을 찾아 반환합니다.

// 이 알고리즘의 시간 복잡도는 문자열의 길이를 n이라고 할 때, 문자열을 나누는 크기 i를 기준으로 O(n/i)번의 문자열 압축 연산이 수행됩니다. 따라서 최악의 경우 O(n^2)의 시간 복잡도를 가지지만, 문자열을 나누는 크기 i를 적절히 선택하면 O(n) 이하의 시간 복잡도를 가질 수 있습니다.
