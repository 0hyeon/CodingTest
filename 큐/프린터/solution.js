//가장앞에있는 문서를 대기목록에서 꺼냅니다.
//가장마지막에 넣습니다.

//이 두가지가 큐 자료구조를 사용하는 키워드
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
  }
  //push
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode; //머리와 꼬리가 동일
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //이어붙이고
      this.tail = newNode; //꼬리갱신
    }
  }
  //shift
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next; //이러면 head가 없어진다
    return value;
  }
  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
  }
  priorities.sort((a, b) => b - a);
  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      //카운터가 늘어날수록 계속 같아지게 되어서 location이 맞을때까지 계속 반복
      //count도 늘어나고 큐도 디큐로 앞에가 계속 빠지게 된다.
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}

//2
function solution(priorities, location) {
  const queue = priorities.map((value, index) => [value, index]);
  priorities.sort((a, b) => b - a);
  let count = 0;
  while (true) {
    const currentValue = queue[0];
    if (currentValue[0] < priorities[count]) {
      queue.push(queue.shift());
    } else {
      const value = queue.shift();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}
