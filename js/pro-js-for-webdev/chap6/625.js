
let arr = ["jordan", "kobe", "oneal", "curry"];

for (let key of arr.keys()) {
    console.log(key);
}

for (const value of arr.values()) {
    console.log(value);
}

for (const [key, value] of arr.entries()) {
    console.log([key, value]);    
}

console.log(Array.from(arr.keys()));
console.log(Array.from(arr.values()));
console.log(Array.from(arr.entries()));



