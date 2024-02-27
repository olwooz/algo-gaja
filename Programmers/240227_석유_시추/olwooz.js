const [dx, dy] = [
  [1, -1, 0, 0],
  [0, 0, -1, 1],
];

function solution(land) {
  let answer = 0;
  const [N, M] = [land.length, land[0].length];

  function isWithinLand(x, y) {
    return 0 <= x && x < N && 0 <= y && y < M;
  }

  const visited = Array(N)
    .fill()
    .map(() => Array(M).fill(false));
  const oilAreaIdx = Array(N)
    .fill()
    .map(() => Array(M).fill(0));
  const oil = [0];

  let currentIdx = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] || land[i][j] === 0) continue;

      let oilAmount = 0;
      const stack = [[i, j]];
      visited[i][j] = true;
      oilAreaIdx[i][j] = currentIdx;

      while (stack.length > 0) {
        oilAmount++;
        const [x, y] = stack.pop();

        for (let k = 0; k < 4; k++) {
          const [nx, ny] = [x + dx[k], y + dy[k]];

          if (!isWithinLand(nx, ny) || visited[nx][ny] || land[nx][ny] === 0)
            continue;

          visited[nx][ny] = true;
          oilAreaIdx[nx][ny] = currentIdx;
          stack.push([nx, ny]);
        }
      }

      oil.push(oilAmount);
      currentIdx++;
    }
  }

  for (let i = 0; i < M; i++) {
    answer = Math.max(
      answer,
      [...new Set(oilAreaIdx.map((row) => row[i]))].reduce(
        (acc, cur) => acc + oil[cur],
        0
      )
    );
  }

  return answer;
}
