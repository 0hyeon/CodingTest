// 이 코드는 자물쇠와 열쇠 문제를 해결하기 위한 JavaScript 함수입니다. 주어진 열쇠(key)와 자물쇠(lock)가 맞물리는지 확인하는 함수입니다. 이 코드의 각 부분은 다음과 같이 동작합니다.

// pad 함수: 지정된 크기(size)와 값(v)을 사용하여 새로운 배열을 생성하고, 모든 요소를 값(v)로 채웁니다. 기본 값(v)는 0입니다.
const pad = (size, v = 0) => Array(size).fill(v);

// solution 함수: 이 함수는 두 개의 이차원 배열(key, lock)을 입력으로 받습니다.
function solution(key, lock) {
  //if문: 자물쇠(lock)의 길이가 열쇠(key)의 길이보다 길 경우, 열쇠를 확장하여 두 배열의 길이가 같아지도록 하는 코드
  if (key.length < lock.length) {
    const gap = lock.length - key.length; //자물쇠와 열쇠의 길이 차이를 계산

    key = [
      //기존 열쇠의 각 행에 0으로 채워진 배열을 추가합니다. 배열의 길이는 gap이며, 이를 통해 열쇠의 각 행이 자물쇠와 같은 길이가 됩니다.
      ...key.map((row) => [...row, ...pad(gap)]), //가로로넓힘
      //열쇠의 길이를 확장하여 자물쇠와 동일한 크기의 이차원 배열을 만듭니다. 이 부분은 새로운 행을 생성하고, 각 행은 0으로 채워진 배열입니다. 새로 추가된 행의 개수는 gap이고, 각 행의 길이는 자물쇠와 동일하게 lock.length입니다.
      ...pad(gap, pad(lock.length)), //세로로넓힘 행추가
    ];
  }

  // m 변수: 열쇠의 길이를 저장합니다.
  const m = key.length;
  console.log(m);
  // 첫 번째 for 루프 (rN): 열쇠를 시계 방향으로 회전시키는 과정을 4번 반복합니다.
  for (let rN = 0; rN < 4; rN++) {
    // if 문 (rN > 0): 첫 번째 회전이 아닌 경우, 열쇠를 시계 방향으로 90도 회전시킵니다.
    if (rN > 0)
      key = key[0].map((_, index) => key.map((row) => row[index]).reverse());
    // 두 번째 for 루프 (vN): 열쇠를 상하로 움직입니다.
    for (let vN = -m + 1; vN <= m - 1; vN++) {
      // vKey 변수: 상하로 움직인 열쇠를 저장합니다.
      const vKey = key.map((row) =>
        vN >= 0
          ? //vN이 양수인 경우에는 열쇠를 아래로 이동시키고, 음수인 경우에는 열쇠를 위로 이동
            [...pad(vN), ...row.slice(0, m - vN)]
          : [...row.slice(-m - vN), ...pad(Math.abs(vN))]
      );
      console.log("vKey : ", vKey);
      // 세 번째 for 루프 (hN): 열쇠를 좌우로 움직입니다.
      for (let hN = -m + 1; hN <= m - 1; hN++) {
        // hKey 변수: 좌우로 움직인 열쇠를 저장합니다.
        const hKey =
          hN >= 0
            ? [...vKey.slice(-m + hN), ...pad(hN, pad(m))]
            : [...pad(Math.abs(hN), pad(m)), ...vKey.slice(0, m + hN)];
        console.log("hKey :", hKey);
        // if 문 (lock.every(...)): 자물쇠의 모든 홈이 열쇠와 정확하게 맞물리면 true를 반환하고 함수를 종료합니다.
        if (lock.every((row, i) => row.every((n, j) => n + hKey[i][j] === 1)))
          return true;
      }
    }
  }
  // 모든 경우를 확인한 후에도 자물쇠가 열리지 않으면, false를 반환합니다.
  return false;
}

const key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
console.log(solution(key, lock));
