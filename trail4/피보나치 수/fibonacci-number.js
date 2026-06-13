const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

const dp = Array.from({ length: n + 1 }, () => 0)

dp[1] = 1
dp[2] = 1

for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
}

console.log(dp[n])