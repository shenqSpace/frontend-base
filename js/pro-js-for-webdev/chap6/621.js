/**
 * Array.from(arrayLike, [mapFunc], [this])
 */

// 将类数组结构转换为数组实例
let str = "zhangsan";
console.log(Array.from(str));

let m = new Map().set(1, 2).set(3, 4);
console.log(Array.from(m));

let s = new Set().add("x").add("y");
console.log(Array.from(s));

const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
console.log(a2);

const iter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  },
};

Array.from(iter);

function argToArr() {
  return Array.from(arguments);
}

console.log(argToArr(4, 3, 2, 1));


console.log(Array.of("x", "y"));
