const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = Number(input[0]);
const W = input.slice(1).map((line) => line.split(' ').map(Number));

function solution(N, W) {
  let answer = Infinity;
  const visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));

  function backtrack(cur, cost, start, cityCount) {
    if (cityCount === N && W[cur][start] > 0) {
      answer = Math.min(answer, cost + W[cur][start]);
      return;
    }

    for (let next = 0; next < N; next++) {
      if (
        next === start ||
        visited[next] ||
        W[cur][next] === 0 ||
        cost + W[cur][next] >= answer
      )
        continue;

      visited[next] = true;
      backtrack(next, cost + W[cur][next], start, cityCount + 1);
      visited[next] = false;
    }
  }

  for (let start = 0; start < N; start++) {
    visited[start] = true;
    backtrack(start, 0, start, 1);
    visited[start] = false;
  }

  console.log(answer);
}

solution(N, W);
