export {};

declare global {
  interface Array<T> {
    filterAndMap<K>(
      func: (item: T, index: number, array: T[]) => undefined | K
    ): K[];
  }
}
