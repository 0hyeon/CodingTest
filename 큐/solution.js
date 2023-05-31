class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
  peek() {
    //head의 값을 반환 peek() 메서드를 호출하면 1을 반환 이때, Queue는 여전히 [1, 2, 3] 상태를 유지
    return this.head.value;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.size);
console.log(queue.peek()); //head의 값을 반환
