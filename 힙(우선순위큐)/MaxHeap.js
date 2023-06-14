class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  //추가로직
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1; //배열의 0번 인덱스를 사용하지 않고 1번 인덱스부터 힙 요소를 저장하기 위함
    let parentIndex = Math.floor(currentIndex / 2); //각 노드의 부모 정점
    //       1
    //     /   \
    //    2     3
    //   / \   / \
    //  4   5 6   7
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      //부모요소보다 추가요소가 클경우
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;
      currentIndex = parentIndex; //두 요소를 교환
      parentIndex = Math.floor(currentIndex / 2); //서열정리
    } //반복적으로 비교와 교환을 진행. 이과정을 새로운 요소가 힙의 적절한 위치로 이동할 때까지 반복
  }
  //삭제로직
  pop() {
    const returnValue = this.heap[1]; //정점
    this.heap[1] = this.heap.pop(); //마지막을 제일위로 올림 첫번째 정점을 다시 찾으려는 목적으로 재정렬하기 위해 맨마지막 노드를 정점으로 올려서 재정렬 하려하기 위한 단계

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
//push
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap);
//pop
const array = [];
array.push(heap.pop()); //63 제일큰값
array.push(heap.pop()); //54
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
console.log(array);
