function solution(maps) {
  let start = [];
  const [yLen, xLen] = [maps.length, maps[0].length];
  let Llocation = [];

  maps.forEach((line, Lidx) => {
    line.split('').forEach((value, Vidx) => {
      if (value === 'S') start = [Lidx, Vidx];
    });
    maps[Lidx] = line.split('');
  });

  function bfs(start, find, defaultTime) {
    const visited = Array(yLen)
      .fill()
      .map(() => Array(xLen).fill(false));
    const queue = [[...start, defaultTime]];
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
      const [y, x, time] = queue.shift();
      const dy = [0, 1, 0, -1];
      const dx = [1, 0, -1, 0];

      for (let i = 0; i < 4; i++) {
        const [ny, nx] = [y + dy[i], x + dx[i]];
        if (!(ny >= 0 && nx >= 0 && ny < yLen && nx < xLen && !visited[ny][nx]))
          continue;
        if (maps[ny][nx] === find) {
          Llocation = [ny, nx];
          return time + 1;
        }
        if (maps[ny][nx] !== 'X') {
          queue.push([ny, nx, time + 1]);
          visited[ny][nx] = true;
        }
      }
    }
    return -1;
  }

  const L = bfs(start, 'L', 0);
  if (L === -1) return -1;
  return bfs(Llocation, 'E', L);
}
