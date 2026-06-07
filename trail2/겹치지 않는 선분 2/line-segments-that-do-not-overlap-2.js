const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
// Please Write your code here.

const sets = new Set()

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (segments[j][0] <= segments[i][0] && segments[i][1] <= segments[j][1]) {
            sets.add(i)
            sets.add(j)
        }
    }
}

console.log(segments.length - sets.size)