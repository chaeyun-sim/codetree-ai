const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const matrix = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))

dp[0][0] = matrix[0][0]

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        if (y === 0 && x === 0) continue;

        const up = y > 0 ? dp[y - 1][x] : -Infinity;
        const left = x > 0 ? dp[y][x - 1] : -Infinity;

        dp[y][x] = Math.max(
            Math.min(up, matrix[y][x]),
            Math.min(left, matrix[y][x])
        )
    }
}

console.log(dp[n - 1][n - 1])
