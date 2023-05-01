class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  find(value) {
    let curnNode = this.head;
    while (curnNode.value !== value) {
      curnNode = curnNode.next;
    }
    return curnNode;
  }
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //이어붙이기
      this.tail = newNode;
    }
  }
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode !== this.head) {
      prevNode.next = prevNode.next.next;
    }
  }
  display() {}
}
