const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(" ").map(Number));

// Please write your code here.

// 상 우 하 좌 xy
const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]

function dfs(x, y, k, visited) {
    let cnt = 1

    for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[ny][nx] === k && !visited[ny][nx]) {
            visited[ny][nx] = true
            cnt += dfs(nx, ny, k, visited)
        }
    }

    return cnt
}

const arr = []

for (let k = 1; k <= 100; k++) {
    const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false))

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (grid[y][x] !== k || visited[y][x]) continue;
            visited[y][x] = true
            arr.push([k, dfs(x, y, k, visited)])
        }
    }
}

console.log(arr.filter(el => el[1] >= 4).length, Math.max(...arr.map(el => el[1])))