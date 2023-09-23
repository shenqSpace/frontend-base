/**
 * fill(value, [start], [end])
 * 静默忽略超出数组边界、零长度及方向相反的索引范围
 */

const zeroes = [0, 0, 0, 0, 0];
console.log(zeroes.fill(1)); // [ 1, 1, 1, 1, 1 ]

console.log(zeroes.fill(2, 1)); // [ 1, 2, 2, 2, 2 ]

console.log(zeroes.fill(3, 2, 3)); // [ 1, 2, 3, 2, 2 ]

/**
 * copyWithin(target, [start], [end])
 * 静默忽略超出数组边界、零长度及方向相反的索引范围
 */

let inits,
  reset = () => (inits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
reset();

console.log(inits.copyWithin(5)); // 参数默认是[5, 0] 
reset();

console.log(inits.copyWithin(0, 5));
