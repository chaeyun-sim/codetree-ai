const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

// 상 우 하 좌 xy
const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]
const visited = Array.from({ length: n }, () => Array(n).fill(false))

function dfs(x, y) {
    let cnt = 1
    visited[y][x] = true;

    for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[ny][nx] === 1 && !visited[ny][nx]) {
            cnt += dfs(nx, ny);
        }
    }

    return cnt
}

let total = 0
const answer = []

for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        if (!grid[y][x] || visited[y][x]) continue;
        answer.push(dfs(x, y))
        total++
    }
}

console.log(total)
console.log(answer.sort((a, b) => a - b).join('\n'))