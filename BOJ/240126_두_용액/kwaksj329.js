const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const liquid = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
solution(N, liquid);

function solution(N, liquid) {
  let [left, right] = [0, N - 1];
  let minimum = [left, right, Math.abs(liquid[left] + liquid[right])];

  while (true) {
    const sum = liquid[left] + liquid[right];
    if (Math.abs(sum) < minimum[2]) minimum = [left, right, Math.abs(sum)];
    if (left + 1 === right || sum === 0) break;
    sum < 0 ? left++ : right--;
  }
  console.log(liquid[minimum[0]], liquid[minimum[1]]);
}
