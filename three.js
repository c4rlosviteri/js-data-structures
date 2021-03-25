class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchThree {
  constructor() {
    this.root = null;
  }

  search(value) {
    if (!value) {
      return null;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) {
        return currentNode;
      } else {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}
