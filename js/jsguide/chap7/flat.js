/**
 * 数组打平
 */
let arr = [1, [2, [3, [4]]]];
console.log(arr.flat());            // 不传参,默认是1 [ 1, 2, [ 3, [ 4 ] ] ]
console.log(arr.flat(2));           // [ 1, 2, 3, [ 4 ] ]
console.log(arr.flat(3));           // [ 1, 2, 3, 4 ]
console.log(arr.flat(4));           // [ 1, 2, 3, 4 ]