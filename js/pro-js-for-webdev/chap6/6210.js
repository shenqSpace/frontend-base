/**
 *
 */

let values = [1, 2, 3, 4, 5];
console.log(values.reverse());
// reverse()很好用，但不够灵活

let arr = [1, 2, 3, 4, 5];

arr.sort((v1, v2) => (v2 - v1));
console.log(arr);
