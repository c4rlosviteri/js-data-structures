class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash method
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // sets based on hash address
  set(key, value) {
    const address = this.hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  // gets element value
  get(key) {
    const address = this.hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }

  // gets keys
  getKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  // gets values
  getValues() {
    const values = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          values.push(this.data[i][j][1]);
        }
      }
    }
    return values;
  }

  // removes elements
  remove(key) {
    const address = this.hash(key);
    const bucket = this.data[address];
    if (bucket) {
      const bucketData = [...bucket];
      // get bucket index to remove (yes, you can use splice)
      let index;
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          index = i;
        }
      }
      // clear bucket
      delete this.data[address];
      // push elements again but index
      for (let i = 0; i < bucket.length; i++) {
        if (i !== index) {
          this.set(bucketData[i][0], bucketData[i][1]);
        }
      }
    }
  }
}
