/**
 * reduce() 和 reduceRight()的一些用法
 */

// 反转数组
let arr = [1, 2, 3, 4, 5];
let reversed = arr.reduceRight((x, y) => {
    x.push(y);
    return x;
}, []);
console.log(reversed);