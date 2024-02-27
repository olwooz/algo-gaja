const [N, ...house] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line, i) => (i === 0 ? Number(line) : line.split(' ').map(Number)));

function solution(N, house) {
  const cache = Array(N)
    .fill()
    .map(() =>
      Array(N)
        .fill()
        .map(() => Array(3).fill(0))
    );
  cache[0][1][0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      if (j + 1 < N && house[i][j + 1] === 0) {
        cache[i][j + 1][0] += cache[i][j][0];
        cache[i][j + 1][0] += cache[i][j][1];
      }
      if (
        j + 1 < N &&
        i + 1 < N &&
        house[i][j + 1] === 0 &&
        house[i + 1][j] === 0 &&
        house[i + 1][j + 1] === 0
      ) {
        cache[i + 1][j + 1][1] += cache[i][j][0];
        cache[i + 1][j + 1][1] += cache[i][j][1];
        cache[i + 1][j + 1][1] += cache[i][j][2];
      }
      if (i + 1 < N && house[i + 1][j] === 0) {
        cache[i + 1][j][2] += cache[i][j][1];
        cache[i + 1][j][2] += cache[i][j][2];
      }
    }
  }

  console.log(cache[N - 1][N - 1].reduce((acc, cur) => acc + cur, 0));
}

solution(N, house);
