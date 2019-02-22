var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  // Implement the methods below

  // FIFO
  // add to the end of list
  someInstance.enqueue = function(value) {
    var storageLength = Object.keys(someInstance.storage).length;
    if (storage[storageLength + 1] !== undefined) {
      var key = storageLength + 2;
    } else {
      var key = storageLength + 1;
    }
    someInstance.storage[key] = value;
  };
  // return the front of the list
  someInstance.dequeue = function() {
    var keysArray = Object.keys(someInstance.storage);
    var firstKey = keysArray[0];
    var firstValue = someInstance.storage[firstKey]
    // remove first value from Object;
    delete someInstance.storage[firstKey];
    return firstValue;
  };

  someInstance.size = function() {
    var storageLength = Object.keys(someInstance.storage).length;
    return storageLength;
  };

  return someInstance;
};


// better way of writing it
// var Queue = function() {
//   var someInstance = {};
//
//   // Use an object with numeric keys to store values
//   var storage = {};
//   // someInstance.storage = storage;
//   // Implement the methods below
//
//   // FIFO
//   // add to the end of list
//   someInstance.enqueue = function(value) {
//     var storageLength = Object.keys(storage).length;
//     if (storage[storageLength + 1] !== undefined) {
//       var key = storageLength + 2;
//     } else {
//       var key = storageLength + 1;
//     }
//     storage[key] = value;
//   };
//   // return the front of the list
//   someInstance.dequeue = function() {
//     var keysArray = Object.keys(storage);
//     if (keysArray.length === 0) {
//       return undefined
//     }
//     var firstKey = keysArray[0];
//     var firstValue = storage[firstKey]
//     // remove first value from Object;
//     delete storage[firstKey];
//     return firstValue;
//   };
//
//   someInstance.size = function() {
//     var storageLength = Object.keys(storage).length;
//     return storageLength;
//   };
//
//   return someInstance;
// };
