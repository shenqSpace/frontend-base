/**
 * 归并操作
 */

/**
 * 通过函数规则对数组元素作归并操作，上一次归并的值作为下一次归并函数的第一个参数prev。返回最后归并的值
 * reduce(ruleFunc)
 * fuleFunc(prev, curr, index, array)
 */
let arr = [1,2,3,4,5];
console.log(arr.reduce((prev, curr, index, arr) => prev + curr)); // 15

/**
 * reduceRight(ruleFunc) 从右往左归并，其他与reduce()相同
 */


