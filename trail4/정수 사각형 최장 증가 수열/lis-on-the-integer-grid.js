const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

const dp = Array.from({ length: n }, () => Array.from({ length: n}, () => 0))

function dfs(x, y) {
    if (dp[y][x] !== 0) return dp[y][x];

    dp[y][x] = 1;

    for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

        if (grid[ny][nx] > grid[y][x]) {
            dp[y][x] = Math.max(dp[y][x], dfs(nx, ny) + 1);
        }
    }

    return dp[y][x];
}

let max = -Infinity

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        max = Math.max(max, dfs(x, y))
    }
}

console.log(max)