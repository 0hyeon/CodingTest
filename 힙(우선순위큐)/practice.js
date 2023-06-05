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
  //삭제로직
  pop() {
    const returnValue = this.heap[1]; //정점
    this.heap[1] = this.heap.pop(); //마지막을 제일위로 올림

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      //자식이 더클경우 반복
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        //우측크면
        const temp = this.heap[currentIndex]; //임시
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex; //재정렬
      } else {
        //왼쪽이더크면
        const temp = this.heap[currentIndex]; //임시
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex; //재정렬
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
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
