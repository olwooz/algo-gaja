const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);
let restInput = input.slice(1);
const testCases = [];

for (let i = 0; i < T; i++) {
  let [p, n, arrString] = restInput;
  const arr = arrString.slice(1, -1).split(',').map(Number);
  testCases.push({
    p,
    n: Number(n),
    arr,
  });
  restInput = restInput.slice(3);
}

function solution({ p, n, arr }) {
  let leftToRight = true;
  let [left, right] = [0, n - 1];

  for (const command of p) {
    if (command === 'R') {
      leftToRight = !leftToRight;
      continue;
    }
    if (left > right) return 'error';
    leftToRight ? left++ : right--;
  }

  const resultArr = arr.slice(left, right + 1);
  return JSON.stringify(leftToRight ? resultArr : resultArr.reverse());
}

testCases.forEach((testCase) => console.log(solution(testCase)));
