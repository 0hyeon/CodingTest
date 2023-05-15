class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      //두번째 push부터 && 굴러온돌이 더크면,
      const temp = this.heap[parentIndex]; //부모값 임시저장
      this.heap[parentIndex] = value; //부모자리에 굴러온돌
      this.heap[currentIndex] = temp; //맨뒤에 박힌돌
      //위치조정
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
      //위치조정후 루트정점이랑 비교후 다시 반복문
    }
  }
}

const heap = new MaxHeap();
heap.push(3);
console.log(heap.heap);
heap.push(4);
console.log(heap.heap);
heap.push(5);
console.log(heap.heap);
heap.push(6);
console.log(heap.heap);
heap.push(7);
