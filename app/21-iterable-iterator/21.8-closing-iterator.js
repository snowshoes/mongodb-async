// an iterable who has return() method
// called closable
function createIterable() {
  let done = false;
  const iterable = {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (!done) {
        done = true;
        return {
          done: false,
          value: 'a'
        };
      }
      return {
        done: true,
        value: undefined // eslint-disable-line
      };
    },

    // The method call return(x) should normally produce the object
    // { done: true, value: x}
    // language mechanism only throw an error if the result isn't an object
    // 最开始的时候没理解这句话
    // 没有给return()函数 return 一个对象，
    // 于是报错 undefined is not an object
    // 注释掉return 的 object查看报错内容
    return() {
      console.log('return() was called');
      return {
        done: true,
        value: 'x'
      };
    }
  };

  return iterable;
}

// 过程详解
// createIterable 只emit一个value { done: false, value: 'a'}
// 然后就结束了，进入 { done: true, value: undefined }
// 在log出第一个value之后,强制abort(break)
// return()方法依然会被调用，并返回其返回值(必须定义为一个object)
for (const x of createIterable()) {
  console.log(x);
  // return() is even called if you abort after
  // receiving the last value ({done: true, value: x})
  // so 'return() was called' will be logged
  break;
}

// Not all iterators are closable
// Array iterators are not
const itArray = ['a', 'b', 'c'];
const iterator = itArray[Symbol.iterator]();
// false
console.log('return' in iterator);

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
    console.log('second loop');
    console.log(x);
  }
}

function getIterator(iterable) {
  return iterable[Symbol.iterator]();
}

twoLoops(getIterator(['a', 'b', 'c', 'd']));
