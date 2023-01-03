"use strict";
if (!Array.prototype.filterAndMap) {
  Array.prototype.filterAndMap = function (func) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const result = func(this[i], i, this);
      if (result !== false) newArr.push(result);
    }
    return newArr;
  };
}
