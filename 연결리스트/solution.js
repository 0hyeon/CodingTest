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
      //head가 null이 아닌경우 진행
      curnNode = curnNode.next;
    }
    console.log(curnNode);
    return curnNode;
  }
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //가리키고
      this.tail = newNode; //꼬리 갱신
    }
  }
  insert(node, newValue) {
    //linkedList.insert(linkedList.find(2), 10);
    const newNode = new Node(newValue); //새로생성
    newNode.next = node.next; //생성된아이의 next => 기존아이의 next
    node.next = newNode; //기존아이의 next => 새로생성된 아이
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
  display() {
    let curnNode = this.head;
    let displayString = "[";
    while (curnNode !== null) {
      displayString += `${curnNode.value}, `;
      curnNode = curnNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}
const linkedList = new singlyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.display();
linkedList.find(3);
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
