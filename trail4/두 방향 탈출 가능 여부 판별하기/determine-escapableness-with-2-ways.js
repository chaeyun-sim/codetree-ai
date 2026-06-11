const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));

// Please Write your code here.

// D, R xy
const directions = [[0, 1], [1, 0]]
const visited = Array.from({ length: n }, () => Array(m).fill(false))
visited[0][0] = true

let flag = false

function dfs(x, y) {
    if (flag) return;

    if (y === n - 1 && x === m - 1) {
        flag = true
        return;
    }

    for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy

        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[ny][nx] && !visited[ny][nx]) {
            visited[ny][nx] = true
            dfs(nx, ny)
        }
    }
}

dfs(0, 0)

console.log(+flag)