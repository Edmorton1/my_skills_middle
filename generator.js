function* strGenerator() {
  const str = 'hello';

  for (a of str) {
    yield a
  }
}

// for (let i of strGenerator()) {
//   console.log(i)
// }

const str = strGenerator()

console.log(str.next())
console.log(str.next())
console.log(str.next())
console.log(str.next())
console.log('return', str.throw())
console.log(str.next())
console.log(str.next())

// const arr = Array.from({ length: 99999999999 }, (_, i) => i);

// console.log(arr.length)

// for (const x of arr) {

//   console.log(x)
//   console.log('asdas')
// }

// function* gen() {
//   for (let i = 0; i < 10000000000000000000; i++) {
//     yield i
//   }
// }

// for (const x of gen()) {
//   console.log(x)
// }