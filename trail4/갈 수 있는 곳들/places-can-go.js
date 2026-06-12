const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const startPoints = input.slice(n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

// xy
const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]

const queue = []
const visited = Array.from({ length: n }, () => Array.from({ length: n}, () => -1))

function bfs(){
    let cnt = k

    while (queue.length > 0) {
        const [x, y] = queue.shift()

        for (const [dx, dy] of directions) {
            const nx = x + dx
            const ny = y + dy

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && visited[ny][nx] < 0 && !grid[ny][nx]) {
                visited[ny][nx] = visited[y][x] + 1
                cnt++
                queue.push([nx, ny])
            }
        }
    }
    return cnt
}

for (const [startY, startX] of startPoints) {
    queue.push([startX - 1, startY - 1]) // dist
    visited[startY - 1][startX - 1] = 0
}

console.log(bfs())