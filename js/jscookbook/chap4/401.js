/**
 * 获取当前日期与时间
 */

const date = new Date();
let localDate = date.toUTCString();
console.log(localDate);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getMinutes());