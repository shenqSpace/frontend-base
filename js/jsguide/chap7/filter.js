
let arr = [1,,3,,5, null, undefined];
let subarr = arr.filter(() => true); // 过滤空隙的原理是什么?
console.log(subarr.length);

// // 过滤空隙, 并删除值为undefined或null的元素
// let res = arr.filter(x => x !== undefined && x !== null);
// console.log(res);