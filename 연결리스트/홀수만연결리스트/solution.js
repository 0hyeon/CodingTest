class Node1 {
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
    while (curnNode !== null && curnNode.value !== value) {
      //head가 null이 아닌경우 진행
      curnNode = curnNode.next;
    }
    console.log("find : ", curnNode);
    return curnNode;
  }
  append(newValue) {
    const newNode = new Node1(newValue);
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
    const newNode = new Node1(newValue); //새로생성
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
linkedList.append(5);
linkedList.append(6);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteEven(head) {
  // 입력으로 주어진 연결 리스트가 비어있는 경우 null을 반환합니다.
  if (head === null) {
    return null;
  }

  let oddHead = null; // 홀수 값을 가지는 노드들의 헤드 노드
  let oddTail = null; // 홀수 값을 가지는 노드들의 마지막 노드
  let curr = head; // 현재 순회 중인 노드

  // 연결 리스트를 순회하면서 홀수 값을 가지는 노드들을 새로운 연결 리스트에 추가합니다.
  while (curr !== null) {
    if (curr.value % 2 !== 0) {
      // 현재 노드의 값이 홀수인 경우
      const newNode = new Node(curr.value);
      if (oddHead === null) {
        // 새로운 연결 리스트가 비어있는 경우
        oddHead = newNode;
        oddTail = newNode;
      } else {
        oddTail.next = newNode;
        oddTail = newNode;
      }
    }
    curr = curr.next;
  }

  return oddHead; // 홀수 값을 가지는 노드들로 이루어진 새로운 연결 리스트의 헤드 노드를 반환합니다.
}

// deleteEven 함수 호출
const result = deleteEven(linkedList.find(1));

// 홀수 값 출력
let currNode = result;
while (currNode !== null) {
  console.log(currNode.value);
  currNode = currNode.next;
}
