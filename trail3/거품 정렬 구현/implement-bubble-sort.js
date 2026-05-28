const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (arr[j] > arr[j + 1]) {
            const tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
        }
    }
}

console.log(arr.join(' '))