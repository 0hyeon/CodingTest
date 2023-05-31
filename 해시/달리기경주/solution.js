function solution(players, callings) {
  const hash = new Map();
  players.forEach((name, index) => {
    hash.set(name, index);
  });
  callings.forEach((name) => {
    // 다음으로 callings에 대한 반복문을 돌리는데,
    // 초기화해주었던 hash에 callings에 대한 요소(이름)로 key에 접근해서 value를 currIdx에 담아두었다.
    const currIdx = hash.get(name);
    const front = players[currIdx - 1];
    // 그럼 해당 이름의 index를 받아왔고 이름이 불린 앞사람과 위치를 바꿔야 한다.
    // 앞사람의 이름을 fornt라는 변수에 currIdx - 1 값을 담아두었다.
    // 그리고 서로의 index 값을 바꿔주고,
    [players[currIdx], players[currIdx - 1]] = [
      players[currIdx - 1],
      players[currIdx],
    ];
    // hash에 바뀐 index로 서로 바꿔 주면서 반복문을 끝까지 돌게 되면 끝이 난다.
    hash.set(name, hash.get(name) - 1);
    hash.set(front, hash.get(name) + 1);
  });

  return players;
}
