// A value is considered *iterable* if it has a
// method whose key is the Symbol.iterator
// that returns a so-called iterator
const arr = ['a', 'b', 'c'];
const iter = arr[Symbol.iterator]();

console.log(iter.next()); // { value: 'a', done: false }
console.log(iter.next()); // { value: 'b', done: false }
console.log(iter.next()); // { value: 'c', done: false }
console.log(iter.next()); // { value: undefined, done: true }
