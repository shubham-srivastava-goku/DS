class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = new Node(value);
    this.bottom = this.top;
    this.length = 1;
  }

  peak = () => {
    return this.top;
  }

  push = (value) => {
    const newNode = new Node(value);
    const oldTop = this.top;
    this.top = newNode;
    this.top.next = oldTop;

    this.length += 1;

    if (this.length === 1) {
      this.bottom = this.top;
    }
    return this;
  }

  pop = () => {
    if (!this.length) {
      return null;
    }
    this.top = this.top.next;
    this.length -= 1;

    if (!this.length) {
      this.bottom = null;
    }

    return this;
  }
}

const stack = new Stack('1');
stack.push('2');
console.log(stack);
stack.pop();
// stack.pop();
console.log(stack);
// stack.push('1');
// stack.push('2');
// console.log(stack);
