const [dx, dy] = [
  [-1, 1, 0, 0],
  [0, 0, -1, 1],
];

function solution(maps) {
  const [R, C] = [maps.length, maps[0].length];

  function isWithinMap(x, y) {
    return 0 <= x && x < R && 0 <= y && y < C;
  }

  function bfs(startPos, destination) {
    const visited = Array(R)
      .fill()
      .map(() => Array(C).fill(false));
    const queue = [];

    queue.push([...startPos, 0]);
    visited[startPos[0]][startPos[1]] = true;

    while (queue.length > 0) {
      const [x, y, moves] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (isWithinMap(nx, ny) && !visited[nx][ny] && maps[nx][ny] !== 'X') {
          if (maps[nx][ny] === destination) return moves + 1;

          visited[nx][ny] = true;
          queue.push([nx, ny, moves + 1]);
        }
      }
    }

    return -1;
  }

  let start, lever;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      if (maps[i][j] === 'L') lever = [i, j];
    }
  }

  const leverTime = bfs(start, 'L');
  const exitTime = bfs(lever, 'E');

  return leverTime < 0 || exitTime < 0 ? -1 : leverTime + exitTime;
}
