/**
 *
 */

/**
 * 通过断言函数判断是否所有元素都满足条件，全都满足则返回true，否则返回false
 * every(assertFunc(ele, index, arrSelf), [])
 * 也可以不是断言函数
 * 这里传入的函数只是函数引用，不是函数调用，写括号只是为了把参数含义表现出来
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.every((ele, index, arr) => ele > 0));

/**
 * 通过断言函数判断是否有元素满足断言条件，只要有就返回true，否则返回false
 * some(assertFunc(ele, index, arrSelf), [])
 */
console.log(arr.some((ele, index, arrSelf) => ele >= 8)); // true

/**
 * 通过函数规则来筛选满足条件的元素组成的数组
 * filter(func(ele, index, arrSelf))
 */
console.log(arr.filter((ele, index, arr) => ele >= 8));

/**
 * 通过函数规则来映射基于原数组的新数组，返回新数组
 * map(ruleFunc)
 */
console.log(arr.map((ele, index, arr) => ele * 2));

/**
 * 通过循环遍历数组对数组进行某些操作
 * forEach(ruleFunc) 没有返回值
 */



