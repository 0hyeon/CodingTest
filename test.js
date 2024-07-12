class Node1 {
  constructor(value) {
    this.value = value;
    this.next = tail;
  }
}
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode; //tail.next도 가리켜야하고, tail등록 해야하는데 순서가 반대로되면 잘못된 로직.    }
    }
  }
  display() {
    let curnNode = this.head;
    let displayString = "["; //여기다가 string을 더할예정

    while (curnNode !== null) {
      let curnNode = this.head;
      displayString += `${curnNode.value},`;
      curnNode = curnNode.next;
    }
  }
}
