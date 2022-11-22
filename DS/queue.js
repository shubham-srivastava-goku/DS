class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  peak = () => {
    return this.top;
  }

  push = (value) => {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;

      return this;
    }
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length += 1;
    return this;
  }

  pop = () => {
    this.head = this.head.next;
    this.length -= 1;

    if (this.head === null) {
      this.tail = null;
    }
    return this;
  }
}

const stack = new Queue('1');
stack.push('2');
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);
stack.push('1');
stack.push('2');
console.log(stack);
