const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);

// Please write your code here.

const numbers = Array.from({ length: k }, (_, i) => i + 1)


function dfs(depth, arr) {
    if (depth === n) {
        console.log(arr.join(' '))
        return;
    }

    for (const num of numbers) {
        dfs(depth + 1, [...arr, num])
    }
}

dfs(0, [])