class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(value) {
    this.data.push(value);
    this.length++;
  }

  pop() {
    this.data.pop();
    this.length--;
  }

  peek() {
    return this.data[this.length - 1];
  }

  empty() {
    this.data = [];
    this.length = 0;
  }
}
