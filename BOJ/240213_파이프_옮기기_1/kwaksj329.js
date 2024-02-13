const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const house = input
  .slice(1, N + 1)
  .map((value) => value.split(' ').map(Number));
console.log(solution(N, house));

function solution(N, house) {
  function sum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  const bigHouse = Array(N + 1)
    .fill()
    .map(() => Array(N + 1).fill([0, 0, 0]));
  bigHouse[1][2] = [1, 0, 0];

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (i === 1 && j === 2) continue;
      if (house[i - 1][j - 1] === 1) {
        bigHouse[i][j] = [0, 0, 0];
        continue;
      }
      let diagonal = 0;
      if (
        i - 2 >= 0 &&
        j - 2 >= 0 &&
        house[i - 2][j - 1] === 0 &&
        house[i - 1][j - 2] === 0
      ) {
        diagonal = sum(bigHouse[i - 1][j - 1]);
      }
      bigHouse[i][j] = [
        bigHouse[i][j - 1][0] + bigHouse[i][j - 1][2],
        bigHouse[i - 1][j][1] + bigHouse[i - 1][j][2],
        diagonal,
      ];
    }
  }
  return sum(bigHouse[N][N]);
}
