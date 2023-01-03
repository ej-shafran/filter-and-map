export {};

declare global {
  interface Array<T> {
    filterAndMap<K>(
      func: (item: T, index: number, array: T[]) => K | boolean
    ): K extends false ? never : K[];
  }
}
