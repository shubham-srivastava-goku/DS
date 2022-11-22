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
