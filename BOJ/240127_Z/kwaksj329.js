const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, r, c] = input[0].split(' ').map(Number);
console.log(solution(N, r, c));

function solution(N, r, c) {
  let answer = 0;

  for (let i = N - 1; i >= 0; i--) {
    const area = 2 ** i;
    if (r < area && c < area) {
      continue;
    } else if (r < area && c >= area) {
      answer += area ** 2 * 1;
      c -= area;
    } else if (r >= area && c < area) {
      answer += area ** 2 * 2;
      r -= area;
    } else if (r >= area && c >= area) {
      answer += area ** 2 * 3;
      r -= area;
      c -= area;
    }
  }
  return answer;
}
