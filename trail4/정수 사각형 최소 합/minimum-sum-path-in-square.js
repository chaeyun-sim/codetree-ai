const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

// 위치, 합
const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity))

dp[0][n - 1] = num[0][n - 1]

for (let y = 0; y < n; y++) {
    for (let x = n - 1; x >= 0; x--) {

        if (y === 0 && x === n - 1) continue;

        const up = y > 0 ? dp[y - 1][x] : Infinity;
        const right = x + 1 < n ? dp[y][x + 1] : Infinity;

        dp[y][x] = Math.min(up, right) + num[y][x];
    }
}

console.log(dp[n - 1][0]);