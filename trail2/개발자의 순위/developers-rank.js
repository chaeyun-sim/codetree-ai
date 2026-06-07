const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let cnt = 0

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j) continue;

        let flag = true

        for (let game = 0; game < k; game++) {
            const posA = arr[game].indexOf(i)
            const posB = arr[game].indexOf(j)

            if (posA > posB) {
                flag = false
                break;
            }
        }

        if (flag) cnt++
    }
}

console.log(cnt)