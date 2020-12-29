class MyArray {
  constructor(...items) {
    this.data = {};
    this.length = 0;

    for (let i = 0; i < items.length; i++) {
      this.data[i] = items[i];
      this.length++;
    }
  }

  // returns by index
  get(index) {
    return this.data[index];
  }

  // inserts element at last position
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  // inserts element at first position
  unshift(item) {
    this.unshiftIndex();
    this.data[0] = item;
    this.length++;
  }

  // deletes last element and returns it
  pop() {
    const last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return last;
  }

  // deletes fist element and returns it;
  shift() {
    const first = this.data[0];
    this.shiftIndex();
    delete this.data[this.length];
    this.length--;
    return first;
  }

  // moves item to next index
  unshiftIndex(index = 0) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
  }

  // moves item to prev index
  shiftIndex(index = 0) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  // removes and/or inserts new items
  splice(index, deleteCount = 0, ...items) {
    // shifts if necessary
    for (let i = 0; i < deleteCount - items.length; i++) {
      this.shiftIndex(index);
    }

    // unshifts if necessary
    for (let i = 0; i < items.length - deleteCount; i++) {
      this.unshiftIndex(index);
    }

    // delete if necessary
    for (let i = 0; i < deleteCount - items.length; i++) {
      delete this.data[this.length - 1 - i];
    }

    // reduce length if necessary
    for (let i = 0; i < deleteCount - items.length; i++) {
      this.length--;
    }

    // add new items
    if (items) {
      for (let i = 0; i < items.length; i++) {
        this.data[index + i] = items[i];
        this.length++;
      }
    }
  }

  // reverse order
  reverse() {
    const data = { ...this.data };
    for (let i = 0; i < this.length; i++) {
      this.data[i] = data[this.length - 1 - i];
    }
  }
}
