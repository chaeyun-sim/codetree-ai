const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

segments.sort((a, b) => a[1] - b[1]);

let cnt = 0;
let lastEnd = -Infinity;

for (const [start, end] of segments) {
    if (start > lastEnd) {
        cnt++;
        lastEnd = end;
    }
}

console.log(cnt)