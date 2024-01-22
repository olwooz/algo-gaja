const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [, k] = input[0].split(' ').map(Number);
const coins = [
  ...new Set(
    input
      .slice(1)
      .map(Number)
      .sort((a, b) => b - a)
  ),
];

function solution(k, coins) {
  const visited = Array(k + 1).fill(-1);
  visited[0] = 0;

  const queue = [[0, 0]];
  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const [price, coinCount] = queue[queueIdx++];

    for (const coin of coins) {
      const newPrice = price + coin;

      if (newPrice === k) {
        console.log(coinCount + 1);
        return;
      }

      if (newPrice < k && visited[newPrice] < 0) {
        visited[newPrice] = coinCount + 1;
        queue.push([newPrice, coinCount + 1]);
      }
    }
  }

  console.log(-1);
}

solution(k, coins);
