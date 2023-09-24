/**
 * 数组操作
 */

/**
 * concat(value1, value2, ...)
 * 不影响原数组，返回新数组。
 * 同flat()一样，默认只打平一层嵌套
 */
let colors = ["red", "orange", "yellow"];
let colors2 = colors.concat("green", ["cyan", ["blue", "purple"]]);
console.log(colors2);

/**
 * slice(start, [end]) 左闭右开原则
 * 不影响原数组，返回新数组。
 */
let sliceColors = colors.slice(1, 2);
console.log(sliceColors);

/**
 * splice(start, delNum, [insertEle], [insertEle])
 * 可以灵活进行删除、插入、替换操作
 * 影响原数组，返回删除元素组成的数组或空数组
 */
function testSplice() {
	console.log("----------in testSplice()---------------");
	let colors = ["red", "orange", "yellow"];
	let removed = colors.splice(0, 1);
	console.log(colors);
	console.log(removed);

	removed = colors.splice(1, 0, "green", "cyan");
	console.log(colors);
	console.log(removed);

	removed = colors.splice(1, 1, "blue", "purple");
	console.log(colors);
	console.log(removed);
}

testSplice();
