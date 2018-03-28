// All ES6 iterators follows this pattern
// iterable = iterator
function iterateOver(...args) {
  let index = 0;
  const iterable = {
    [Symbol.iterator]() {
      // iterable
      return this;
    },
    next() {
      if (index < args.length) {
        return {
          value: args[index++]
        };
      }
      return {
        done: true
      };
    }
  };

  return iterable;
}

const arr = [];
const iterator = arr[Symbol.iterator]();
console.log(iterator[Symbol.iterator]() === iterator);

const fromArr = Array.from(iterateOver('a', 'b', 'c'));
console.log(fromArr);
