class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);
    while (parentIdx !== 0 && this.heap[parentIdx] < value) {
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = value;
      this.heap[currentIdx] = temp;
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }
  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let crIdx = 1;
    let lIdx = 2;
    let rIdx = 3;

    while (
      this.heap[crIdx] < this.heap[lIdx] ||
      this.heap[crIdx] < this.heap[rIdx]
    ) {
      if (this.heap[lIdx] < this.heap[rIdx]) {
        const temp = this.heap[crIdx];
        this.heap[crIdx] = this.heap[rIdx];
        this.heap[rIdx] = temp;
        crIdx = rIdx;
      } else {
        const temp = this.heap[crIdx];
        this.heap[crIdx] = this.heap[lIdx];
        this.heap[lIdx] = temp;
        crIdx = lIdx;
      }
      lIdx = crIdx * 2;
      rIdx = crIdx * 2 + 1;
    }
    return returnValue;
  }
}

function solution(N, works) {
  if (works.reduce((a, b) => a + b) <= N) return 0;
  const heap = new MaxHeap();
  for (let work of works) {
    heap.push(work);
  }
  for (let i = 0; i < N; i += 1) {
    heap.push(heap.pop() - 1);
  }
  return heap.heap.reduce((a, b) => a + b * b);
}
