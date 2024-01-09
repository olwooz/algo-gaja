const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const weight = [];
const value = [];
const slicedInput = input.slice(1, N + 1);
for (let i = 0; i < N; i++) {
  const splitValue = slicedInput[i].split(' ').map(Number);
  weight.push(splitValue[0]);
  value.push(splitValue[1]);
}

function solution(N, K, weight, value) {
  const maxValue = Array.from({ length: K + 1 }, () => Array(N + 1).fill(0));

  for (let w = 1; w <= K; w++) {
    for (let i = 1; i <= N; i++) {
      if (weight[i - 1] > w) {
        maxValue[w][i] = maxValue[w][i - 1];
      } else {
        maxValue[w][i] = Math.max(
          maxValue[w][i - 1],
          maxValue[w - weight[i - 1]][i - 1] + value[i - 1]
        );
      }
    }
  }
  console.log(maxValue[K][N]);
}

solution(N, K, weight, value);
