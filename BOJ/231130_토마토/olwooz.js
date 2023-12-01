const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [M, N] = input[0].split(' ').map(Number);
const box = input.slice(1).map((row) => row.split(' ').map(Number));

function solution(M, N, box) {
  const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
  ];
  const queue = [];
  let queueIndex = 0;
  let unripeCount = 0;
  let answer = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 0) {
        unripeCount++;
      }
      if (box[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  while (queueIndex < queue.length) {
    const [row, col] = queue[queueIndex++];

    for (let i = 0; i < 4; i++) {
      const newRow = row + dx[i];
      const newCol = col + dy[i];

      if (
        newRow < 0 ||
        newRow >= N ||
        newCol < 0 ||
        newCol >= M ||
        box[newRow][newCol] !== 0
      )
        continue;

      box[newRow][newCol] = box[row][col] + 1;
      unripeCount--;
      queue.push([newRow, newCol]);
      answer = Math.max(answer, box[newRow][newCol]);
    }
  }

  return unripeCount === 0 ? answer - 1 : -1;
}

console.log(solution(M, N, box));
