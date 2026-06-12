const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

// 상 우 하 좌 xy
const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]
const queue = [] // x, y, dist
const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false))

let flag = false

function bfs() {
    queue.push([0, 0])
    visited[0][0] = true

    while (queue.length > 0) {
        const [x, y] = queue.shift()

        if (x === m - 1 && y === n - 1) {
            flag = true
            return;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx
            const ny = y + dy

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[ny][nx] && !visited[ny][nx]) {
                queue.push([nx, ny]);
                visited[ny][nx] = true
            }
        }
    }
}

bfs()

console.log(+flag)