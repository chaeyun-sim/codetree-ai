const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + Number(n)).map(line => line.split(' ').map(Number));

// Please Write your code here.

// 상 우 하 좌 xy
const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]

function dfs(x, y, k, visited) {
    for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy

        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[ny][nx] > k && !visited[ny][nx]) {
            visited[ny][nx] = true
            dfs(nx, ny, k, visited)
        }
    }
}

let answerK = 1
let answerCnt = -1

for (let k = 1; k <= 100; k++) {
    const visited = Array.from({ length: n }, () => Array.from({ lenght: m }, () => false))
    let cnt = 0;

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            if (grid[y][x] <= k || visited[y][x]) continue;
            cnt++
            visited[y][x] = true
            dfs(x, y, k, visited)
        }
    }

    if (answerCnt < cnt) {
        answerCnt = cnt
        answerK = k
    }
}

console.log(answerK, answerCnt)