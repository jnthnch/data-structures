var Queue = function() {
  // Queue.prototype = Object.create(Queue.prototype);
  var someInstance = Object.create(queueMethods);
  var storage = {};
  someInstance.firstKey = 0;
  someInstance.lastKey = 0;
  someInstance.storage = storage;
  return someInstance
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.lastKey] = value;
    this.lastKey++
  },
  dequeue: function() {
    var firstValue = this.storage[this.firstKey]
    // remove first value from Object;
    delete this.storage[this.firstKey];
    this.firstKey++
    return firstValue;
  },
  size: function() {
    if (this.firstKey > this.lastKey) {
      return 0;
    }
    return this.lastKey - this.firstKey
  }
};
