export {};

declare global {
  interface Array<T> {
    filterAndMap<K>(
      filter: (
        item: T,
        index: number,
        array: T[]
      ) => boolean,
      map: (
        item: T,
        index: number,
        array: T[],
      ) => K,
    ): K[]
  }
}
