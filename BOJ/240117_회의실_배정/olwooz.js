const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = Number(input[0]);
const meetings = input.slice(1).map((line) => line.split(' ').map(Number));

function solution(N, meetings) {
  let answer = 0;
  let prevEndTime = 0;

  meetings.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  for (const [startTime, endTime] of meetings) {
    if (prevEndTime <= startTime) {
      answer++;
      prevEndTime = endTime;
    }
  }

  console.log(answer);
}

solution(N, meetings);
