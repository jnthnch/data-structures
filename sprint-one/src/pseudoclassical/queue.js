var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstKey = 0;
  this.lastKey = 0;
};



Queue.prototype.enqueue =  function(value) {
  this.storage[this.lastKey] = value;
  this.lastKey++
}

Queue.prototype.dequeue = function() {
  var firstValue = this.storage[this.firstKey]
  // remove first value from Object;
  delete this.storage[this.firstKey];
  this.firstKey++
  return firstValue;
}

Queue.prototype.size = function() {
  if (this.firstKey > this.lastKey) {
    return 0;
  }
  return this.lastKey - this.firstKey
}
