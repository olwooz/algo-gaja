const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const info = input.slice(1, n + 1).map((value) => {
  return value.split(' ').map(Number);
});
solution(n, m, info);

function solution(n, m, info) {
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  let pictures = 0;
  let maxArea = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function findPicture(start, stack) {
    stack.push(start);

    for (let k = 0; k < 4; k++) {
      const nx = start[1] + dx[k];
      const ny = start[0] + dy[k];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < m &&
        ny < n &&
        !visited[ny][nx] &&
        info[ny][nx] === 1
      ) {
        visited[ny][nx] = true;
        findPicture([ny, nx], stack);
      }
    }
    return stack.length;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true;
        if (info[i][j] === 1) {
          pictures++;
          const returnValue = findPicture([i, j], []);
          if (returnValue > maxArea) maxArea = returnValue;
        }
      }
    }
  }
  console.log(pictures, maxArea);
}
