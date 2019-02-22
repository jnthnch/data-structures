class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.firstKey = 0;
    this.lastKey = 0;
  }

  enqueue(value) {
    this.storage[this.lastKey] = value;
    this.lastKey++
  }

  dequeue() {
    var firstValue = this.storage[this.firstKey]
    // remove first value from Object;
    delete this.storage[this.firstKey];
    this.firstKey++
    return firstValue;
  }

  size() {
    if (this.firstKey > this.lastKey) {
      return 0;
    }
    return this.lastKey - this.firstKey
  }

}
