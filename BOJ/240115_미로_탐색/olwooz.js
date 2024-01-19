const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map((line) => line.split(''));

const [dx, dy] = [
  [-1, 1, 0, 0],
  [0, 0, -1, 1],
];

function solution(N, M, maze) {
  function isWithinMaze(x, y) {
    return 0 <= x && x < N && 0 <= y && y < M;
  }

  const visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));
  const queue = [[0, 0, 1]];
  let queueIdx = 0;

  while (queueIdx < queue.length) {
    const [x, y, moves] = queue[queueIdx++];

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (isWithinMaze(nx, ny) && maze[nx][ny] === '1' && !visited[nx][ny]) {
        if (nx === N - 1 && ny === M - 1) {
          console.log(moves + 1);
          return;
        }
        visited[nx][ny] = true;
        queue.push([nx, ny, moves + 1]);
      }
    }
  }

  return;
}

solution(N, M, maze);
