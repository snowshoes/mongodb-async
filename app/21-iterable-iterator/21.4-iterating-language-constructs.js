// Destructuring via an Array Pattern
const set = new Set()
  .add('e')
  .add('f')
  .add('g');

// Array Pattern + Destructuring
const [first, ...rest] = set;
console.log(first);
console.log(rest);

// for (let x of iterable) {

// }

// non-iterable values must be converted to something iterable
console.log('Array.from(arrayLike: ArrayLike)');
const arrayLike = {
  length: 2,
  0: 'x',
  1: 'y'
};

for (const x of Array.from(arrayLike)) {
  console.log(x);
}

// 1. iterating an value
let e;
for (e of ['i', 'j']) {
  console.log(e);
}
// 2. interating an object property
const objet = {
};
for (objet.prop of ['k', 'l']) {
  console.log(objet.prop);
}
// 3. iterating with an Array elements
const anArr = [];
for (anArr[0] of ['m', 'n']) {
  console.log(anArr[0]);
}

// [key, value] pairs
const map = new Map().set(false, 'no').set(true, 'yes');
for (const [key, value] of map) {
  console.log(`Key is ${key}, Value is ${value}`);
}

// ****** Iterable -> Array *****
// Array.from() converts iterable and Array-like values to Arrays
const arrayFrom = Array.from(new Map().set(false, 'non').set(true, 'oui'));
console.log(arrayFrom);
const arrayLike2 = Array.from({
  length: 2,
  0: 'Hello',
  1: 'World'
});
console.log(arrayLike2);
// ...iterable  => Array
// The spread operator inserts the values of an iterable into an Array
const insertArr = ['b', 'c'];
let inserted = ['a', ...insertArr, 'd'];
console.log(inserted);

// *** Maps && Sets *****
// Map(iterable) constructor call
// The constructor Map turns an iterable over [key, value] pairs into a Map
const mapFromIterable = new Map([['uno', 'one'], ['dos', 'two']]);
console.log(mapFromIterable.get('uno'));
console.log(mapFromIterable.get('dos'));

const setFromIterable = new Set(['red', 'green', 'blue']);
console.log(setFromIterable.has('red'));
console.log(setFromIterable.has('yellow'));
console.log(setFromIterable.keys());
const values = setFromIterable.values();
inserted = ['x', ...values, 'y', 'z'];
console.log(inserted);
