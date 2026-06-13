const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

const MOD = 10007;
const dp = Array(n + 1).fill(0);

dp[0] = 1;

for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2];

    if (i >= 3) dp[i] += dp[i - 3];

    dp[i] %= MOD;
}

console.log(dp[n]);