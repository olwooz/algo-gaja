const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const first = input[0];
const second = input[1];
console.log(solution(first, second));

function solution(first, second) {
  const lcsCount = Array(second.length + 1)
    .fill()
    .map(() => Array(first.length + 1).fill(0));

  for (let i = 1; i <= second.length; i++) {
    for (let j = 1; j <= first.length; j++) {
      if (first[j - 1] === second[i - 1]) {
        lcsCount[i][j] = lcsCount[i - 1][j - 1] + 1;
      } else {
        lcsCount[i][j] = Math.max(lcsCount[i][j - 1], lcsCount[i - 1][j]);
      }
    }
  }
  return lcsCount[second.length][first.length];
}
