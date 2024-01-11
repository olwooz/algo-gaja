const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = Number(input[0]);
const grid = input.slice(1);

const [dx, dy] = [
  [-1, 1, 0, 0],
  [0, 0, -1, 1],
];

function solution(N, grid, isColorWeak) {
  function isSameColor(a, b) {
    return isColorWeak
      ? (['R', 'G'].includes(a) && ['R', 'G'].includes(b)) || a === b
      : a === b;
  }

  function isWithinGrid(x, y) {
    return 0 <= x && x < N && 0 <= y && y < N;
  }

  let visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));
  let areaCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;

      const areaColor = grid[i][j];
      const stack = [[i, j]];

      while (stack.length > 0) {
        const [x, y] = stack.pop();

        for (let k = 0; k < 4; k++) {
          const [nx, ny] = [x + dx[k], y + dy[k]];
          if (
            isWithinGrid(nx, ny) &&
            !visited[nx][ny] &&
            isSameColor(grid[nx][ny], areaColor)
          ) {
            visited[nx][ny] = true;
            stack.push([nx, ny]);
          }
        }
      }

      areaCount++;
    }
  }

  return areaCount;
}

console.log(solution(N, grid, false), solution(N, grid, true));
