const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

// Please Write your code here.

function dfs(depth, arr) {
    if (depth === n) {
        console.log(arr.join(' '));
        return;
    }

    for (let i = 1; i <= k; i++) {
        if (depth >= 2 && arr[depth - 1] === i && arr[depth - 2] === i) {
            continue;
        }
        dfs(depth + 1, [...arr, i])
    }
}

dfs(0, [])