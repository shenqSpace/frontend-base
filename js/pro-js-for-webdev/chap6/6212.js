/**
 * 搜索数组元素
 */

/**
 * 1. 通过严格相等的方式搜索数组元素
 * indexOf(target, [start]) 返回元素索引位置，没找到则返回-1
 * lastIndexOf(target, [start]) 返回元素索引位置，没找到则返回-1
 * includes(target, [start]) 返回true 或 false
 */

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.indexOf(1)); // index is 0
console.log(arr.lastIndexOf(7)); // index is 6
console.log(arr.includes(4)); // true

/**
 * 2. 通过断言函数搜索数组元素
 * 每个索引都会调用这个函数
 * find(assertFunc, [this]) 返回第一个匹配断言函数的元素值，没找到返回undefined
 * findIndex(assertFunc, [this]) 返回第一个匹配断言函数的元素值的索引，没找到返回-1
 */
let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.find(x => x >= 7)); // value is 7
console.log(arr2.findIndex(x => x >= 7)); // index is 6
console.log(arr2.find(x => x > 7)); // undefined
console.log(arr2.findIndex(x => x > 7)); // -1



