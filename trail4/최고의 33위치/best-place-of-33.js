const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const sets = []

for (let i = 0; i <= n - 3; i++) {
    for (let j = 0; j <= n - 3; j++) {
        sets.push([i, j])
    }
}

let max = 0

for (const [y, x] of sets) {
    let sum = 0
    for (let i = y; i <= y + 2; i++) {
        for (let j = x; j <= x + 2; j++) {
            sum += grid[i][j]
        }
    }
    max = Math.max(max, sum)
}

console.log(max)