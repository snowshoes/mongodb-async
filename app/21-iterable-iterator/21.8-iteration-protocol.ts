interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface Iterator<T> {
  next(): IteratorResult<T>;
  return?(value?: any): IteratorResult<T>;
}

interface IteratorResult<T> {
  value: T;
  done: boolean;
}
