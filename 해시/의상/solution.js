function solution(clothes) {
  let sum = 1;
  const clothMap = new Map();
  clothes.forEach((el) => {
    clothMap.set(el[1], (clothMap.get(el[1]) | 0) + 1);
  });
  console.log(clothMap);
  for (let [key, value] of clothMap) {
    sum *= value + 1;
  }
  return sum - 1;
}
