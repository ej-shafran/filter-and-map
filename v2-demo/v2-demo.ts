import "../v2/index";

// `filterAndMap` allows us to filter for only certain conditions,
// while changing the things we keep through the filter,
// all in one go:
const example1 = [1, 2, 3];
const result1 = example1.filterAndMap((item) => item > 1 && item + 1);
console.log("result 1: ", result1);

// what would we use `filterAndMap` for?
// let's say I have an array of objects with an `id` and an `isValid` field
const example2 = [
  { id: 1, isValid: true },
  { id: 2, isValid: false },
  { id: 3, isValid: true },
];
// I want to map to an array that has the IDs of the valid objects
// to do this without `filterAndMap` I must do:
const oldWay = example2.filter((item) => item.isValid).map((item) => item.id);
// or the other way around:
const otherWay = example2
  .map((item) => (item.isValid ? item.id : undefined))
  .filter((item) => item !== undefined);
// which actually causes a typescript problem, because typescript still thinks that
// `otherWay` is `(number | undefined)[]` even though we've filtered out the `undefined`...
// and not to mention that we're iterating through the array twice!

// with filterAndMap:
const result2 = example2.filterAndMap((item) => item.isValid && item.id);
// and we will only iterate through the array once
console.log("result 2: ", result2);

// IMPLEMENTATION LIMITS (v2)
// it doesn't allow us to create arrays with `false` in them
const example3 = [10, 20, 30];
// we would expect this to result in [false],
// but it will instead result in an empty array...
const result3 = example3.filterAndMap((item) => item === 10 && false);
// because of this I have typed this version of filterAndMap to return `never` for `false`;
// that's why the type of result3 is `never`...
console.log("result 3: ", result3);

const example4 = ["a", "ab", "abc"];
// and why the type of result4 is `true[]` - all of the `false` values will be excluded from the array
const result4 = example4.filterAndMap(
  (item) => item.length > 1 && Math.random() > 0.5
);
console.log("result 4: ", result4);

// note that this is only a problem with explicit `false` and not any falsy value -
// result5 will act as expected
const example5 = [true, false, false];
const result5 = example5.filterAndMap((item) => !item && null);
console.log("result 5: ", result5);

// IMPLEMENTATION BENEFITS (v2)
// this form of writing is significantly more aesthetic and shorter
