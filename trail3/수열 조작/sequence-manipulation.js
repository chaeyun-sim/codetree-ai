const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

// Please Write your code here.

const arr = Array.from({ length: n }, (_, i) => i + 1)

let head = 0;

while (arr.length - head > 1) {
    head++;          // 맨 앞 제거
    arr.push(arr[head]); // 다음 카드 뒤로 이동
    head++;
}

console.log(arr[head])