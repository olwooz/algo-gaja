const [[N, M], ...paper] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const [dx, dy] = [
  [-1, 1, 0, 0],
  [0, 0, -1, 1],
];

function solution(N, M, paper) {
  function isWithinPaper(x, y) {
    return 0 <= x && x < N && 0 <= y && y < M;
  }

  function getIsOutside() {
    const isOutside = Array(N)
      .fill()
      .map(() => Array(M).fill(false));
    const stack = [];

    isOutside[0][0] = true;
    stack.push([0, 0]);

    while (stack.length > 0) {
      const [x, y] = stack.pop();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (
          isWithinPaper(nx, ny) &&
          paper[nx][ny] === 0 &&
          !isOutside[nx][ny]
        ) {
          isOutside[nx][ny] = true;
          stack.push([nx, ny]);
        }
      }
    }
    return [...isOutside];
  }

  function meltCheese() {
    let isOutside = getIsOutside();

    for (let i = 1; i < N - 1; i++) {
      for (let j = 1; j < M - 1; j++) {
        if (paper[i][j] === 0) continue;

        let airCount = 0;

        for (let k = 0; k < 4; k++) {
          const [ni, nj] = [i + dx[k], j + dy[k]];
          if (isOutside[ni][nj]) airCount++;
        }

        if (airCount < 2) continue;

        cheeseCount--;
        paper[i][j] = 0;
      }
    }
  }

  let answer = 0;
  let cheeseCount = paper.reduce(
    (acc, cur) => acc + cur.filter((item) => item === 1).length,
    0
  );

  while (cheeseCount > 0) {
    meltCheese();
    answer++;
  }

  console.log(answer);
}

solution(N, M, paper);
