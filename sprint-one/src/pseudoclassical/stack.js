var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstKey = 0;
  this.lastKey = 0;
};


Stack.prototype.push = function(value) {
  this.storage[this.lastKey] = value;
  this.lastKey++
}

Stack.prototype.pop = function() {
  var lastValue = this.storage[this.lastKey - 1];
  // remove first value from Object;
  delete this.storage[this.lastKey  - 1];
  this.lastKey--
  return lastValue;
}

Stack.prototype.size = function() {
  if (this.firstKey > this.lastKey) {
    return 0;
  }
  return this.lastKey - this.firstKey
}
