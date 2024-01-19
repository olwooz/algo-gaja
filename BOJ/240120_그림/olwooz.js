const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [n, m] = input[0].split(' ').map(Number);
const paper = input.slice(1).map((line) => line.split(' '));

const [dx, dy] = [
  [-1, 1, 0, 0],
  [0, 0, -1, 1],
];

function solution(n, m, paper) {
  let picturesCount = 0;
  let maxArea = 0;

  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));

  function isWithinPaper(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m;
  }

  function dfs(i, j) {
    const stack = [];
    let area = 1;

    visited[i][j] = true;
    stack.push([i, j]);

    while (stack.length > 0) {
      const [x, y] = stack.pop();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (
          isWithinPaper(nx, ny) &&
          !visited[nx][ny] &&
          paper[nx][ny] === '1'
        ) {
          visited[nx][ny] = true;
          stack.push([nx, ny]);
          area++;
        }
      }
    }

    maxArea = Math.max(maxArea, area);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (paper[i][j] === '0' || visited[i][j]) continue;
      dfs(i, j);
      picturesCount++;
    }
  }

  console.log(picturesCount);
  console.log(maxArea);
}

solution(n, m, paper);
