# filter-and-map

## Installation

```bash
npm install filter-and-map
```

## Usage

In your code's entry point (usually `index.*` or `main.*`), include the following line:

```ts
import 'filter-and-map';
```

You should now have access to `Array.prototype.filterAndMap` throughout the entirety of your code.

## `Array.prototype.filterAndMap`

The `Array.prototype.filterAndMap` method can be used like so:

```ts
const example = [
    { id: 1, isValid: true, name: "Bret" },
    { id: 2, isValid: false, name: "Gary" },
    { id: 3, isValid: true, name: "Shafran" }
]

const result = example.filterAndMap((item) => {
    if (item.isValid) return item.name;
});

// or we could write:
const result = example.filterAndMap((item) => item.isValid ? item.name : undefined);
```

