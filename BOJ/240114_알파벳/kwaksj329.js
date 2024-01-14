const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1);

function solution(R, C, board) {
  let maxAnswer = 1;
  const visited = Array(26).fill(false);
  visited[board[0][0].codePointAt() - 65] = true;

  function findNext(position, visited, answer) {
    let [y, x] = position;
    if (answer > maxAnswer) maxAnswer = answer;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      if (
        x + dx[i] >= 0 &&
        x + dx[i] < C &&
        y + dy[i] >= 0 &&
        y + dy[i] < R &&
        !visited[board[y + dy[i]][x + dx[i]].codePointAt() - 65]
      ) {
        answer++;
        visited[board[y + dy[i]][x + dx[i]].codePointAt() - 65] = true;
        findNext([y + dy[i], x + dx[i]], visited, answer);
        visited[board[y + dy[i]][x + dx[i]].codePointAt() - 65] = false;
        answer--;
      }
    }
  }
  findNext([0, 0], visited, 1);
  return maxAnswer;
}

console.log(solution(R, C, board));
