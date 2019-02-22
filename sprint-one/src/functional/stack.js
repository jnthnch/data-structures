var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  // Implement the methods below

  // LIFO
  someInstance.push = function(value) {
    var storageSize = Object.keys(someInstance.storage).length;
    var key = storageSize + 1;
    someInstance.storage[key] = value;
  };

  someInstance.pop = function() {
    var storageKeys = Object.keys(someInstance.storage);
    var lastKey = storageKeys[storageKeys.length - 1];
    var lastValue = someInstance.storage[lastKey];
    delete someInstance.storage[lastKey];
    return lastValue;
  };

  someInstance.size = function() {
    var storageSize = Object.keys(someInstance.storage).length;
    return storageSize;
  };

  return someInstance;
};
