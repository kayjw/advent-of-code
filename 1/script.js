const fs = require("fs");

const arr = fs
  .readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

let count = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    count++;
  }
}

console.log(count);