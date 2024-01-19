const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1);

const [dx, dy] = [
  [-1, 1, 0, 0],
  [0, 0, -1, 1],
];

function solution(R, C, board) {
  const visited = Object.fromEntries(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => [letter, false])
  );
  let maxMoves = 1;

  function isWithinBoard(x, y) {
    return 0 <= x && x < R && 0 <= y && y < C;
  }

  function dfs(x, y, moves) {
    maxMoves = Math.max(maxMoves, moves);

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (isWithinBoard(nx, ny) && !visited[board[nx][ny]]) {
        visited[board[nx][ny]] = true;
        dfs(nx, ny, moves + 1);
        visited[board[nx][ny]] = false;
      }
    }
  }

  visited[board[0][0]] = true;
  dfs(0, 0, 1);

  console.log(maxMoves);
}

solution(R, C, board);
