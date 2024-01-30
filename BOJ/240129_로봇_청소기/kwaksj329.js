const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map(Number);
const room = input.slice(2, N + 2).map((value) => {
  return value.split(' ').map(Number);
});
if (d === 1) {
  d = 3;
} else if (d === 3) {
  d = 1;
}
console.log(solution(N, M, r, c, d, room));

function solution(N, M, r, c, d, room) {
  let answer = 0;
  const cleaned = Array(N)
    .fill()
    .map(() => Array(M).fill(false));

  const yPosition = [-1, 0, 1, 0, -1, 0, 1, 0];
  const xPosition = [0, -1, 0, 1, 0, -1, 0, 1];

  while (true) {
    if (!cleaned[r][c] && room[r][c] === 0) {
      cleaned[r][c] = true;
      answer += 1;
    }

    let found = false;
    for (let i = d + 1; i < d + 5; i++) {
      const ny = r + yPosition[i];
      const nx = c + xPosition[i];

      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < N &&
        nx < M &&
        !cleaned[ny][nx] &&
        room[ny][nx] === 0
      ) {
        r = ny;
        c = nx;
        d = i % 4;
        found = true;
        break;
      }
    }

    if (found) continue;
    if (d === 0 && r + 1 < N && room[r + 1][c] === 0) {
      r += 1;
      continue;
    }
    if (d === 1 && c + 1 < M && room[r][c + 1] === 0) {
      c += 1;
      continue;
    }
    if (d === 2 && r - 1 >= 0 && room[r - 1][c] === 0) {
      r -= 1;
      continue;
    }
    if (d === 3 && c - 1 >= 0 && room[r][c - 1] === 0) {
      c -= 1;
      continue;
    }
    break;
  }
  return answer;
}
