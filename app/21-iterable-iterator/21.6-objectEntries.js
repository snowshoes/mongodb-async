function objectEntries(obj) {
  let index = 0;

  // In ES6, you can use strings or symbols as property keys
  // Reflect.ownKeys() retrieves both
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
  // console.log(`Key is ${key}, Value is ${value}`);
  console.log(`${key}: ${value}`);
}

// combinators of iterables
// Combinators' are functions that combine exsiting iterables and create new ones
function take(n, iterable) {
  const iterator = iterable[Symbol.iterator]();

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (n > 0) {
        n--; //eslint-disable-line
        return iterator.next();
      }
      return {
        done: true
      };
    }
  };
}

const taken = ['a', 'b', 'c', 'd'];
for (const x of take(2, taken)) {
  console.log(x);
}

function zip(...iterables) {
  const iterators = iterables.map(it => it[Symbol.iterator]());
  let done = false;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (!done) {
        const items = iterators.map(it => it.next());
        done = items.some(i => i.done);
        if (!done) {
          return {
            value: items.map(i => i.value)
          };
        }
        // for (const iterator of iterators) {
        //   iterator.return();
        // }
      }
      return {
        done: true
      };
    }
  };
}

const zipped = zip(['a', 'b', 'c'], ['d', 'e', 'f', 'g', 'h']);
for (const zipp of zipped) {
  console.log(zipp);
}
