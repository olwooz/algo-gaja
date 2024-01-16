const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1);

function solution(N, M, map) {
  const queue = [[0, 0, 1]];
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [y, x, answer] = queue.shift();
    if (y === N - 1 && x === M - 1) return answer;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < M &&
        ny < N &&
        !visited[ny][nx] &&
        map[ny][nx] === '1'
      ) {
        queue.push([ny, nx, answer + 1]);
        visited[ny][nx] = true;
      }
    }
  }
}

console.log(solution(N, M, map));
