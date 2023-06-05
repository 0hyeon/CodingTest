class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  //추가로직
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2); //2,3 is parent index => 1
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex; //while업데이트 (currentIndex ,parentIndex)
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
}
