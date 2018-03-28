// iterable data source
// Arrays
// for-in, for-of is not encouraged
// https://coldfunction.com/p/6p
// instead use forEach()

for (const x of ['a', 'b', 'c']) {
  console.log(x);
}

// Strings
for (const x of 'crocodile\uD83D\uDC0A') {
  console.log(x);
}

// Maps
// Map.prototype.set()
const map = new Map().set('a', 1).set('b', 2);
for (const pair of map) {
  console.log(pair);
}

// Set
// Set.prototype.add()
const set = new Set().add('a').add('b');
for (const x of set) {
  console.log(x);
}

// arguments is iterable
function printArgs() {
  for (const x of arguments) {
    console.log(x);
  }
}

printArgs('arg1', 'arg2');

// All ES6 data structures have 3 methods
// that returns iterable objects
// entries(), keys(), values()
const arr = ['e', 'f', 'g', 'h'];
for (const pair of arr.entries()) {
  console.log(pair);
}
for (const keys of arr.keys()) {
  console.log(keys);
}
// for (const values of arr.values()) {
//   console.log(values);
// }

// plain objects are not iterable
// saftest way to iterate over properties
// objectEntries()
function objectEntries(obj) {
  let index = 0;
  // in ES6, you can use strings or symbols as property
  // Reflect.ownKey() retrieves both
  const propKeys = Reflect.ownKeys(obj);

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < propKeys.length) {
        const key = propKeys[index];
        index++;
        return {
          value: [key, obj[key]]
        };
      }
      return {
        done: true
      };
    }
  };
}

const obj = {
  first: 'Jane',
  last: 'Doe'
};

for (const [key, value] of objectEntries(obj)) {
  console.log(`${key} => ${value}`);
}
