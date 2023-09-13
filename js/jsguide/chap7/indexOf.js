/**
 * 编写一个函数,从指定的数组中搜索指定的值,并返回所有匹配元素的索引.
 */

function findAll(arr, x) {
    let indexes = [], i = 0, len = arr.length;
    while (i < len) {
        i = arr.indexOf(x, i);
        if (i === -1) break;
        indexes.push(i);
        i += 1;
    }
    return indexes;
}

let arr = [1,2,3,4,5,6,2];
let res = findAll(arr, 2);
console.log(res);