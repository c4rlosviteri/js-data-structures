class Queue {
  constructor() {
    this.data = [];
  }

  get length() {
    return this.data.length;
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.length === 0;
  }
}
