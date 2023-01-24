export {};

declare global {
  interface Array<T> {
    /**
     * Allows arrays to be filtered and mapped in one iteration using a callback;
     * when the callback returns `undefined`, the value is dropped from the array -
     * otherwise the returned value is kept.
     *
     * @param callback a callback function that will be called with every item in the array. The results of the callback are entered into the new array so long as they are not `undefined`.
     *
     * @example
     * const arr = [1, 1, 3, 4];
     * arr.filterAndMap((item, i) => {
     *    if (item > i) return item + 1;
     * }); // -> [4, 5]
     *
     * arr.filterAndMap((item) => item % 2 === 0 ? item * 2 : undefined); // -> [8];
     *
     **/
    filterAndMap<K>(
      /**
       * @param item each item of the array
       * @param index the index for each item
       * @param array the entire array
       * @returns a mapped value, or `undefined` if the item should not be kept in the array
       **/
      callback: (
        /**
         * Each item of the array.
         **/
        item: T,
        /**
         * The index of `item` in the array.
         **/
        index: number,
        /**
         * The entire array.
         **/
        array: T[],
      ) => undefined | K,
    ): K[];
  }
}
