const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

const mod = 1000000007
const dp = Array.from({ length: n + 1 }, () => 0)

dp[0] = 1
dp[1] = 2
dp[2] = 7

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2] * 3) % mod;
    for (let j = i - 3; j >= 0; j--) {
        dp[i] = (dp[i] + dp[j] * 2) % mod
    }
}

console.log(dp[n] % mod)