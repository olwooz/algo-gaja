function solution(land) {
  const [n, m] = [land.length, land[0].length];
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  const oilRecords = Array(m)
    .fill()
    .map((_, i) => i)
    .reduce((acc, curr) => {
      acc[curr] = 0;
      return acc;
    }, {});

  function dfs(start) {
    const stack = [start];
    visited[start[0]][start[1]] = true;
    const colNumber = Array(m).fill(false);
    let area = 1;
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];

    while (stack.length > 0) {
      const [y, x] = stack.pop();
      colNumber[x] = true;
      for (let i = 0; i < 4; i++) {
        const [ny, nx] = [y + dy[i], x + dx[i]];
        if (
          ny >= 0 &&
          nx >= 0 &&
          ny < n &&
          nx < m &&
          !visited[ny][nx] &&
          land[ny][nx] === 1
        ) {
          colNumber[nx] = true;
          visited[ny][nx] = true;
          stack.push([ny, nx]);
          area++;
        }
      }
    }
    return [area, colNumber];
  }

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (!visited[y][x] && land[y][x] === 1) {
        const [area, colNumber] = dfs([y, x]);
        colNumber.forEach((value, idx) => {
          if (value) oilRecords[idx] += area;
        });
      }
    }
  }
  return Math.max(...Object.values(oilRecords));
}
