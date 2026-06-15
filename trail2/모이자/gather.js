const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let min = Infinity

for (let home = 0; home < n; home++) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        const dist = Math.abs(home - i)
        sum += (arr[i] * dist)
    }
    min = Math.min(min, sum)
}

console.log(min)