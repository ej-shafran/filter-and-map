"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../v1/index");
// `filterAndMap` allows us to filter for only certain conditions,
// while changing the things we keep through the filter,
// all in one go:
const example1 = [1, 2, 3];
const result1 = example1.filterAndMap((item) => item > 1 ? item + 1 : undefined);
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
const result2 = example2.filterAndMap((item) => item.isValid ? item.id : undefined);
console.log("result 2: ", result2);
// IMPLEMENTATION LIMITS
// this form of `filterAndMap` will not allow us to explicitly place `undefined` inside of the resulting array;
// `undefined` was chosen for this purpose as it tends to be something we want to filter out anyways,
// but this is still a limitation...
// additionally, this implementation is lacking aesthetically in contrast to v2,
// and the repeating `: undefined` is repetitive
