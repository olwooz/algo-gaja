const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const paper = input.slice(1, N + 1).map((value) => {
  return value.split(' ').map(Number);
});
console.log(solution(N, M, paper));

function solution(N, M, paper) {
  paper[0][0] = 'o';
  let stack = [[0, 0]];
  const dy = [0, -1, 0, 1];
  const dx = [-1, 0, 1, 0];

  function findOutside(y, x, stack) {
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && paper[ny][nx] === 0) {
        paper[ny][nx] = 'o';
        stack.push([ny, nx]);
      }
    }
  }

  function melting(y, x, num) {
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];
      if (ny >= 0 && ny < N && nx >= 0 && nx < M && paper[ny][nx] === 'o')
        num++;
    }
    if (num >= 2) return true;
    return false;
  }

  let answer = 0;
  while (true) {
    while (stack.length > 0) {
      const [y, x] = stack.pop();
      findOutside(y, x, stack);
    }
    stack = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (paper[i][j] === 1 && melting(i, j, 0)) stack.push([i, j]);
      }
    }

    if (stack.length === 0) break;
    stack.forEach((value) => {
      paper[value[0]][value[1]] = 'o';
    });
    answer++;
  }

  return answer;
}
