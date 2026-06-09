const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const answer = []
let max = 0

// 2x2 사각형
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        let sum = 0
        const tmp = []
        if (i + 1 < n && j + 1 < m) {
            for (let y = i; y <= i + 1; y++) {
                for (let x = j; x <= j + 1; x++)  {
                    sum += grid[y][x]
                    tmp.push(grid[y][x])
                }
            }
            for (const num of tmp) {
                max = Math.max(max, sum - num)
            }
        }
    }
}

// console.log(answer)

// 1x3 사각형

// 가로
for (let y = 0; y < n; y++) {
    for (let x = 0; x + 2 < m; x++) {
        max = Math.max(
            max,
            grid[y][x] +
            grid[y][x + 1] +
            grid[y][x + 2]
        );
    }
}

// 세로
for (let x = 0; x < m; x++) {
    for (let y = 0; y + 2 < n; y++) {
        max = Math.max(
            max,
            grid[y][x] +
            grid[y + 1][x] +
            grid[y + 2][x]
        );
    }
}

console.log(max)