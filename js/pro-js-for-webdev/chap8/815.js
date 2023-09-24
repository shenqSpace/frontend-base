/**
 * 递归检查超过两个值是否相等
 */

function recursivelyCheckEqual(x, ...rest) {
	return (
		Object.is(x, rest[0]) &&
		(rest.length < 2 || recursivelyCheckEqual(...rest))
	);
}

console.log(recursivelyCheckEqual(1));