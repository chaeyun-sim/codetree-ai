const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const num = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))

dp[0][0] = num[0][0]

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === 0 && j === 0) continue;

        const up = i > 0 ? dp[i - 1][j] : -Infinity;
        const right = j > 0 ? dp[i][j - 1] : -Infinity;

        dp[i][j] = Math.max(up, right) + num[i][j];
    }
}

console.log(dp[n - 1][n - 1])