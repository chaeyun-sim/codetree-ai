const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// Please Write your code here.

function diff(a, b) {
    const d = Math.abs(a - b);
    return Math.min(d, n - d);
}

function valid(x, y, z, a, b, c) {
    return (
        diff(x, a) <= 2 &&
        diff(y, b) <= 2 &&
        diff(z, c) <= 2
    );
}

let answer = 0;

for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
        for (let z = 1; z <= n; z++) {

            if (
                valid(x, y, z, a, b, c) ||
                valid(x, y, z, a2, b2, c2)
            ) {
                answer++;
            }
        }
    }
}


console.log(answer)