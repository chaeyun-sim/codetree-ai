const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// Please write your code here.

const k = Math.max(...arr).toString().length;

for (let pos = k - 1; pos >= 0; pos--) {
    const arr_new = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
        const str = String(arr[i]).padStart(k, '0');

        const digit = Number(str[pos]);

        arr_new[digit].push(arr[i]);
    }

    const store_arr = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < arr_new[i].length; j++) {
            store_arr.push(arr_new[i][j]);
        }
    }

    arr = store_arr;
}

console.log(arr.join(' '));