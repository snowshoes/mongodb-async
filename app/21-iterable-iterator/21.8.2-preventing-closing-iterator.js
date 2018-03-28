// an iterable is not closable
// can continue iterating it after an abrupt exit
// resume from whereever it interrupted
function twoLoops(ite) {
  for (const x of ite) {
    console.log('first loop');
    console.log(x);
    break;
  }

  for (const x of ite) {
    // console.log('second loop');
    console.log(x);
  }
}

function getIterator(iterable) {
  return iterable[Symbol.iterator]();
}

twoLoops(getIterator(['a', 'b', 'c', 'd']));

class PreventReturn {
  constructor(iterator) {
    this.iterator = iterator;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    return this.iterator.next();
  }

  return(value = undefined) {
    return {
      done: false,
      value
    };
  }
}

function* elements() {
  yield 'i';
  yield 'j';
  yield 'k';
}

twoLoops(elements());

twoLoops(new PreventReturn(elements()));
