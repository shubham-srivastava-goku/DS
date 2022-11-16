// 10->5->20

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append = (value) => {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;

    return this;
  }

  prepend = (value) => {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;

    return this;
  }

  getNodeAtIndex = (index) => {
    let currentNode = this.head;
    let currentIndex = 0;
    while(currentIndex !== index) {
      currentNode = this.head.next;
      currentIndex += 1;
    }

    return currentNode;
  }

  insert = (index, value) => {
    if (index >= this.length - 1) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const currentNode = this.getNodeAtIndex(index - 1);
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.length += 1;

    return this;
  }

  remove = (index) => {
    if (index === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return this;
    }

    const currentNode = this.getNodeAtIndex(index - 1);
    currentNode.next = currentNode.next.next;
    this.length -= 1;
    return this;
  }

  print = () => {
    const array = [];
    let currentNode = this.head;
    while(currentNode.next) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    array.push(currentNode.value);
    return array;
  };
}

const linkedList = new LinkedList(15);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.insert(1, 10);
linkedList.remove(0);
console.log(linkedList.print());
