Array.prototype.myReduce = function (cb, initial) {
  let acc = initial;
  let start = 0;

  if (acc === undefined) {
    acc = this[0];
    start = 1;
  }

  for (let i = start; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};
