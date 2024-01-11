const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const picture = input.slice(1);

function solution(picture, visitedNumber, stack, answer) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[0][0] = true;

  function find(y, x, picture) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    const nextStack = [];
    for (let i = 0; i < 4; i++) {
      if (
        x + dx[i] >= 0 &&
        x + dx[i] < N &&
        y + dy[i] >= 0 &&
        y + dy[i] < N &&
        picture[y][x] === picture[y + dy[i]][x + dx[i]] &&
        !visited[y + dy[i]][x + dx[i]]
      ) {
        nextStack.push([y + dy[i], x + dx[i]]);
        visited[y + dy[i]][x + dx[i]] = true;
        visitedNumber++;
      }
    }
    return nextStack;
  }

  while (visitedNumber < N * N) {
    while (stack.length > 0) {
      const [y, x] = stack.pop();
      const result = find(y, x, picture);
      if (result.length > 0) stack.push(...result);
    }

    let check = false;
    if (!check && visitedNumber < N * N) {
      for (let line = 0; line < N; line++) {
        for (let value = 0; value < N; value++) {
          if (!visited[line][value] && !check) {
            stack.push([line, value]);
            visited[line][value] = true;
            visitedNumber++;
            check = true;
            answer++;
          }
        }
      }
    }
  }
  return answer;
}

const blind = picture.reduce((acc, curr) => {
  acc.push(curr.replace(/G/gi, 'R'));
  return acc;
}, []);

console.log(solution(picture, 1, [[0, 0]], 1), solution(blind, 1, [[0, 0]], 1));
