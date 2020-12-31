class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  getAt(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (node.next !== null) {
        node = node.next;
      }
    }
    return node;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      const prevNode = this.getAt(index - 1);
      const nextNode = prevNode.next;
      node.next = nextNode;
      prevNode.next = node;
      this.length++;
    }
  }

  pop() {
    // second last
    const prevNode = this.getAt(this.length - 2);
    prevNode.next = null;
    this.tail = prevNode;
    this.length--;
  }

  shift() {
    this.head = this.head.next;
    this.length--;
  }

  removeAt(index) {
    if (index >= this.length - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      const prevNode = this.getAt(index - 1);
      const nextNode = this.getAt(index + 1);
      prevNode.next = nextNode;
      this.length--;
    }
  }
}
