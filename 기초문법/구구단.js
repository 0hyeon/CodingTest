for (i = 2; i <= 9; i++) {
  for (j = 1; j <= 9; j++) {
    if (j == 4) {
      continue;
    }
    console.log(`${i} X ${j}= ${i * j}`);
  }
  console.log("");
}
