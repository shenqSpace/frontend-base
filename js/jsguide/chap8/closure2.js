
let f = (function () {
    let counter = 0;
    return function () {
        return counter++;
    }
}());

console.log(f());

