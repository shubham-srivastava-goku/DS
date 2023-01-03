class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert = (value) => {
    const node = new TreeNode(value);
    if(!this.root) {
      this.root = node;

      return this;
    }
    let current = this.root;
    while(current !== null) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          current = null;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = node;
          current = null;
        } else {
          current = current.right;
        }
      }
    }
  }

  lookup = (value) => {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    while(current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (value === current.value) {
        return current;
      }
    }
    return null;
  }

  remove = (value) => {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    let parentNode = null;
    while(current) {
      parentNode = current;
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (value === current.value) {
        // No right child

        if (current.right === null) {
          if (current.left !== null) {
            parentNode.left = current.left;
          } else {
            parentNode.left = null;
          }
        }
      }
    }
    return null;
  }
}

const bst = new BinaryTree();

bst.insert(9);
bst.insert(20);
bst.insert(4);
bst.insert(170);
bst.insert(1);
bst.insert(6);
bst.insert(15);
console.log(JSON.stringify(bst));

console.log(bst.lookup(6));
console.log(bst.lookup(213));
