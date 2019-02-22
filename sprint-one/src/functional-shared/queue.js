var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  someInstance.storage = storage;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var storageLength = Object.keys(this.storage).length;
    if (this.storage[storageLength + 1] !== undefined) {
      var key = storageLength + 2;
    } else {
      var key = storageLength + 1;
    }
    this.storage[key] = value;
  },
  dequeue: function() {
    var keysArray = Object.keys(this.storage);
    var firstKey = keysArray[0];
    var firstValue = this.storage[firstKey]
    // remove first value from Object;
    delete this.storage[firstKey];
    return firstValue;
  },
  size: function() {
    var storageLength = Object.keys(this.storage).length;
    return storageLength;
  }
};
