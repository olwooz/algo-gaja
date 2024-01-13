const [T, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

function solution(n, stickers) {
  const cache = Array(n + 1)
    .fill()
    .map(() => Array(3).fill(0));

  for (let i = 1; i <= n; i++) {
    cache[i][0] =
      Math.max(cache[i - 1][1], cache[i - 1][2]) + stickers[0][i - 1];
    cache[i][1] =
      Math.max(cache[i - 1][0], cache[i - 1][2]) + stickers[1][i - 1];
    cache[i][2] = Math.max(cache[i - 1][0], cache[i - 1][1]);
  }

  console.log(Math.max(...cache[n]));
}

for (let i = 0; i < T; i++) {
  const n = Number(input[i * 3]);
  const stickers = [
    input[i * 3 + 1].split(' ').map(Number),
    input[i * 3 + 2].split(' ').map(Number),
  ];
  solution(n, stickers);
}
