const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = [];
for (let i = 1; i <= m; i++) {
    edges.push(input[i].split(' ').map(Number));
}

// Please Write your code here.

const visited = Array.from({ length: n }, () => false)
const graph = Array.from({ length: n + 1 }, () => [])

for (const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
}

const sets = new Set()

function dfs(v) {
    visited[v] = true
    sets.add(v)

    for (const node of graph[v]) {
        if (visited[node]) continue;
        dfs(node)
    }
}

dfs(1)

console.log(sets.size - 1)