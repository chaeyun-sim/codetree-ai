const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.

const queue = Array.from({ length: n }, (_, i) => i + 1);
const answer = []

while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
        queue.push(queue.shift());
    }
    answer.push(queue.shift());
}

console.log(answer.concat(queue).join(' '))