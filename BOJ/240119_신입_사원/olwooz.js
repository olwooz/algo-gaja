let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);
let line = 1;

function solution(N, scores) {
  const sortedScore = scores.sort((a, b) => a[0] - b[0]);
  let prevMin = N + 1;
  let answer = 0;

  for (let i = 0; i < N; i++) {
    if (sortedScore[i][1] > prevMin) continue;

    prevMin = sortedScore[i][1];
    answer++;
  }

  console.log(answer);
}

for (let i = 0; i < T; i++) {
  const N = Number(input[line++]);
  const scores = [];

  for (let j = 0; j < N; j++) {
    scores.push(input[line++].split(' ').map(Number));
  }

  solution(N, scores);
}
