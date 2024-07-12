// Node 정의
function Node(value, next = null) {
  return Object.freeze({ value, next });
}

// 싱글리 링크드 리스트 정의
function singlyLinkedList(head = null, tail = null) {
  return Object.freeze({ head, tail });
}

// 새 노드를 리스트의 끝에 추가하는 함수
function append(list, newValue) {
  const newNode = Node(newValue);
  if (list.head === null) {
    return singlyLinkedList(newNode, newNode);
  } else {
    let newHead = list.head;
    let newTail = newHead;
    while (newTail.next !== null) {
      newTail = newTail.next;
    }
    newTail = Node(newTail.value, newNode);
    return singlyLinkedList(newHead, newTail);
  }
}

// 리스트에서 특정 값을 찾는 함수
function find(list, value) {
  let currentNode = list.head;
  while (currentNode !== null && currentNode.value !== value) {
    currentNode = currentNode.next;
  }
  console.log("find : ", currentNode);
  return currentNode;
}

// 노드 다음에 새 노드를 삽입하는 함수
function insert(list, node, newValue) {
  if (node === null) {
    return list;
  }
  const newNode = Node(newValue, node.next);
  let newHead = list.head;
  let currentNode = newHead;
  while (currentNode !== null && currentNode !== node) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  return singlyLinkedList(newHead, list.tail);
}

// 특정 값을 가진 노드를 리스트에서 제거하는 함수
function remove(list, value) {
  if (list.head === null) {
    return list;
  }
  if (list.head.value === value) {
    return singlyLinkedList(list.head.next, list.tail);
  }
  let newHead = list.head;
  let currentNode = newHead;
  while (currentNode.next !== null && currentNode.next.value !== value) {
    currentNode = currentNode.next;
  }
  if (currentNode.next !== null) {
    currentNode.next = currentNode.next.next;
  }
  return singlyLinkedList(newHead, list.tail);
}

// 리스트를 출력하는 함수
function display(list) {
  let currentNode = list.head;
  let displayString = "[";
  while (currentNode !== null) {
    displayString += `${currentNode.value}, `;
    currentNode = currentNode.next;
  }
  displayString = displayString.substring(0, displayString.length - 2);
  displayString += "]";
  console.log(displayString);
}

// 홀수 값을 가지는 노드들만 남기는 함수
// 홀수 값을 가지는 노드들만 남기는 함수
function deleteEven(head) {
  if (head === null) {
    return null;
  }

  let oddHead = null;
  let oddTail = null;
  let curr = head;

  while (curr !== null) {
    if (curr.value % 2 !== 0) {
      const newNode = Node(curr.value);
      if (oddHead === null) {
        oddHead = newNode;
        oddTail = newNode;
      } else {
        oddTail = Node(oddTail.value, newNode);
        oddTail = newNode;
      }
    }
    curr = curr.next;
  }

  return oddHead;
}

// 테스트 코드
let list = singlyLinkedList();
list = append(list, 1);
list = append(list, 3);
list = append(list, 4);
list = append(list, 18);
list = append(list, 19);

console.log("Original list:");
display(list);

// deleteEven 함수 호출
const oddList = deleteEven(list.head);

console.log("Odd values list:");
let currentNode = oddList;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
