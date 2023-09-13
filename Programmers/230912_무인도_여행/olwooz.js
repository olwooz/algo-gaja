function solution(maps) {
  const [dr, dc] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
  ];
  const [R, C] = [maps.length, maps[0].length];
  const visited = Array(R)
    .fill()
    .map(() => Array(C).fill(false));
  let maxDays = [];

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (maps[i][j] !== 'X') dfs(i, j);
    }
  }

  maxDays.sort((a, b) => a - b);

  return maxDays.length !== 0 ? maxDays : [-1];

  function dfs(r, c) {
    if (visited[r][c]) return;

    let days = Number(maps[r][c]);
    let stack = [[r, c]];
    visited[r][c] = true;

    while (stack.length > 0) {
      const [curR, curC] = stack.pop();

      for (let i = 0; i < 4; i++) {
        const [nextR, nextC] = [curR + dr[i], curC + dc[i]];

        if (isIsland(nextR, nextC) && !visited[nextR][nextC]) {
          days += Number(maps[nextR][nextC]);
          stack = [...stack, [nextR, nextC]];
          visited[nextR][nextC] = true;
        }
      }
    }

    maxDays = [...maxDays, days];

    return;
  }

  function isIsland(r, c) {
    return 0 <= r && r < R && 0 <= c && c < C && maps[r][c] !== 'X';
  }
}
