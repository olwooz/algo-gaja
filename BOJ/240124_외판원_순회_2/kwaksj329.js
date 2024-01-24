const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const price = input.slice(1, N + 1).map((value) => {
  return value.split(' ').map(Number);
});
console.log(solution(N, price));

function solution(N, price) {
  let answer = 1000000 * N + 1;

  for (let i = 0; i < N; i++) {
    const visited = Array(N).fill(false);
    visited[i] = true;
    findMinimum([i, i], visited, 1, 0);
  }

  function findMinimum(index, visited, visitCount, sum) {
    const [start, now] = index;
    if (visitCount === N && price[now][start] > 0) {
      answer = Math.min(sum + price[now][start], answer);
      return;
    }
    for (let j = 0; j < N; j++) {
      if (price[now][j] > 0 && !visited[j]) {
        visited[j] = true;
        findMinimum([start, j], visited, visitCount + 1, sum + price[now][j]);
        visited[j] = false;
      }
    }
  }
  return answer;
}
