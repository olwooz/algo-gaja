const [N, A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((input, i) => {
    if (i === 0) return Number(input);
    return input.split(' ').map(Number);
  });

function solution(N, A) {
  let NGE = Array(N).fill(-1);
  const stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && A[stack[stack.length - 1]] < A[i]) {
      NGE[stack.pop()] = A[i];
    }
    stack.push(i);
  }

  return NGE.join(' ');
}

console.log(solution(N, A));
