function isOutOfBounds(x, y, n, m) {
  return x < 0 || x >= n || y < 0 || y >= m;
}

function solution(maps) {
  const [n, m] = [maps.length, maps[0].length];
  const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
  ];
  const queue = [[0, 0, 1]];

  let visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y, moves] = queue.shift();

    if (x === n - 1 && y === m - 1) return moves;

    for (let i = 0; i < 4; i++) {
      const [newX, newY] = [x + dx[i], y + dy[i]];

      if (
        isOutOfBounds(newX, newY, n, m) ||
        maps[newX][newY] === 0 ||
        visited[newX][newY]
      )
        continue;

      visited[newX][newY] = true;
      queue.push([newX, newY, moves + 1]);
    }
  }

  return -1;
}
