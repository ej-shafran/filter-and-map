if (!Array.prototype.filterAndMap) {
  Array.prototype.filterAndMap = function (filter, map) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const should = filter(this[i], i, this);
      if (should) newArr.push(map(this[i], i, this);
    }
    return newArr;
  }
}
