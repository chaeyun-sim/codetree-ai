const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let cnt = 0

function dfs(len) {
    if (len === n) {
        cnt++;
        return;
    }

    if (len > n) return;

    for (let d = 1; d <= 4; d++) {
        dfs(len + d);
    }
}

dfs(0);

console.log(cnt)