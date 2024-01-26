const [N, r, c] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(N, r, c) {
  let [answer, size, row, col] = [0, N, r, c];

  while (size > 0) {
    const half = 2 ** size / 2;
    let quadrant = 0;

    if (row >= half) {
      quadrant += 2;
      row -= half;
    }

    if (col >= half) {
      quadrant++;
      col -= half;
    }

    answer += half ** 2 * quadrant;
    size--;
  }

  console.log(answer);
}

solution(N, r, c);
