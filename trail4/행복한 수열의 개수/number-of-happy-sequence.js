const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

function isHappy(arr) {
    let cnt = 1;
    if (cnt >= m) return true

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            cnt++;
            if (cnt >= m) return true;
        } else {
            cnt = 1;
        }
    }

    return false;
}

let answer = 0

for (let i = 0; i < n; i++) {
    if (isHappy(grid[i])) answer++;

    const col = [];
    for (let j = 0; j < n; j++) {
        col.push(grid[j][i]);
    }

    if (isHappy(col)) answer++;
}

console.log(answer)