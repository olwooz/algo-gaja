const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const coins = input
  .slice(1, n + 1)
  .map(Number)
  .sort((a, b) => a - b);
console.log(solution(n, k, coins));

function solution(n, k, coins) {
  const results = Array(k + 1).fill(10001);
  results[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = coins[i]; j <= k; j++) {
      results[j] = Math.min(results[j], results[j - coins[i]] + 1);
    }
  }
  return results[k] != 10001 ? results[k] : -1;
}
