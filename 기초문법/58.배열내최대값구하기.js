function answer(arr) {
  //   result = arr[0];
  result = Number.MIN_SAFE_INTEGER;
  //result = Math.max.apply(null, arr);
  //apply는 배열을 담을수 있음

  for (let i = 0; i < arr.length; i++) {
    if (result <= arr[i]) result = arr[i];
  }

  return result;
}

input = [
  [1, 6, 5, 2, 3],
  [19, 41, 23, -4, 17],
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
