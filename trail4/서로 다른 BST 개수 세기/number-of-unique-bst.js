const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

const dp = Array.from({ length: n + 1 }, () => 0)

dp[0] = 1
dp[1] = 1

for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        dp[i] += dp[i - j - 1] * dp[j]
    }
}

console.log(dp[n])
