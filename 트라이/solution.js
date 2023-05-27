class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.cnt = 0;
  }
}
class Trie {
  //루트로 빈노드생성
  constructor() {
    this.root = new Node();
  }
  insert(string) {
    let currentNode = this.root; //문자열을 추가하면 탐색을 위해서 루트부터 시작
    currentNode.cnt += 1;
    for (const char of string) {
      //문자열을 앞에서부터 하나씩 자르며 순회
      if (!currentNode.children.has(char)) {
        //자른문자열이 간선으로 가지고 있지 않다면,새롭게 노드를 추가
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      //그러고나서 다음정점으로 이동
      currentNode = currentNode.children.get(char);
      currentNode.cnt += 1;
    }
    //이걸반복하면 문자열을 전부 요소로 추가할수있음
  }
  has(string) {
    //문자열이 존재하는지 체크
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
  getCount(string) {
    let cnt = 0;
    let currentNode = this.root;
    for (const char of string) {
      cnt += 1;

      currentNode = currentNode.children.get(char);
      if (currentNode.cnt === 1) break;
    }

    return cnt;
  }
}
const solution = (words) => {
  let result = 0;
  const trie = new Trie();

  for (let i = 0; i < words.length; i += 1) {
    trie.insert(words[i]);
  }

  for (let i = 0; i < words.length; i += 1) {
    result += trie.getCount(words[i]);
  }
  console.log(result);
  return result;
};
solution("cat");
const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat"));
console.log(trie.has("cat"));
console.log(trie.has("cap"));
