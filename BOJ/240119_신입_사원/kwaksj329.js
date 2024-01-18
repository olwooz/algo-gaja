const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input[0]);
let start = 1;
for (let i = 0; i < T; i++) {
  const N = Number(input[start]);
  const applicants = input
    .slice(start + 1, start + 1 + N)
    .map((input) => {
      return input.split(' ').map(Number);
    })
    .sort((a, b) => a[0] - b[0]);
  start = start + 1 + N;
  console.log(solution(N, applicants));
}

function solution(N, applicants) {
  let answer = 1;
  let memo = applicants[0][1];
  for (let i = 1; i < N; i++) {
    if (applicants[i][1] < memo) {
      memo = applicants[i][1];
      answer++;
    }
  }
  return answer;
}
