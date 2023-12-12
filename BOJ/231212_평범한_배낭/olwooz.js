const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, K] = input[0].split(' ').map(Number);
const items = input.slice(1).map((line) => line.split(' ').map(Number));

function solution(N, K, items) {
  const cache = Array(K + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const [W, V] = items[i];
    for (let j = K; j >= W; j--) {
      if (cache[j - W] + V > cache[j]) cache[j] = cache[j - W] + V;
    }
  }

  return cache[K];
}

console.log(solution(N, K, items));
