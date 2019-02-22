var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  someInstance.storage = storage;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var storageSize = Object.keys(this.storage).length;
    var key = storageSize + 1;
    this.storage[key] = value;
  },
  pop: function() {
    var storageKeys = Object.keys(this.storage);
    var lastKey = storageKeys[storageKeys.length - 1];
    var lastValue = this.storage[lastKey];
    delete this.storage[lastKey];
    return lastValue;
  },
  size: function() {
    var storageSize = Object.keys(this.storage).length;
    return storageSize;
  }
};
