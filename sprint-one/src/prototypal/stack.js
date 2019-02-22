var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  var storage = {};
  someInstance.storage = storage;
  someInstance.firstKey = 0;
  someInstance.lastKey = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.lastKey] = value;
    this.lastKey++;
  },
  pop: function() {
    var lastValue = this.storage[this.lastKey - 1];
    // remove first value from Object;
    delete this.storage[this.lastKey - 1];
    this.lastKey--;
    return lastValue;
  },
  size: function() {
    if (this.firstKey > this.lastKey) {
      return 0;
    }
    return this.lastKey - this.firstKey;
  }


};
