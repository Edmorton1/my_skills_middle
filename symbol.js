console.log(Symbol.iterator);

const sym = Symbol('key');

const obj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
};

for (const v of obj) {
  console.log(v); // 1, 2
}

console.log(Symbol('key') === Symbol('key'));

console.log(sym.description);