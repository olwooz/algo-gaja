const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const meeting = input.slice(1, N + 1).reduce((acc, curr) => {
  acc.push(curr.split(' ').map(Number));
  return acc;
}, []);
meeting.sort((a, b) => {
  return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
});

function solution(N, meeting) {
  let answer = 1;
  let finishTime = meeting[0][1];
  meeting.forEach((value, idx) => {
    if (idx > 0 && value[0] >= finishTime) {
      answer++;
      finishTime = value[1];
    }
  });
  return answer;
}

console.log(solution(N, meeting));
