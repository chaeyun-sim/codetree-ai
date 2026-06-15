const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let count = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      if (
        Math.abs(i - a) <= 2 ||
        Math.abs(j - b) <= 2 ||
        Math.abs(k - c) <= 2
      ) {
        count++;
      }
    }
  }
}

console.log(count);