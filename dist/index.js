"use strict";
if (!Array.prototype.filterAndMap) {
  Object.defineProperty(Array.prototype, "filterAndMap", {
    value: function (func) {
      const newArr = [];
      for (let i = 0; i < this.length; i++) {
        const result = func(this[i], i, this);
        if (result !== undefined) newArr.push(result);
      }
      return newArr;
    },
  });
}
