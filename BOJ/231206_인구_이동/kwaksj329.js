const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, L, R] = input[0].split(" ").map(Number);
const land = [];
for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  land.push(line);
}

function solution(N, L, R, land) {
  let answer = 0;
  const DY = [0, -1, 0, 1];
  const DX = [-1, 0, 1, 0];

  function checkPopulation(y, x, stackForRecord, stackForMove, visited) {
    const start = land[y][x];
    visited[y][x] = true;
    for (let i = 0; i < 4; i++) {
      const [dy, dx] = [DY[i], DX[i]];
      if (y + dy >= 0 && y + dy < N && x + dx >= 0 && x + dx < N && !visited[y + dy][x + dx]) {
        const newLand = land[y + dy][x + dx];
        if (Math.abs(newLand - start) <= R && Math.abs(newLand - start) >= L) {
          visited[y + dy][x + dx] = true;
          stackForRecord.push([y + dy, x + dx]);
          stackForMove.push([y + dy, x + dx]);
        }
      }
    }
    if (stackForMove.length > 0) {
      checkPopulation(...stackForMove.pop(), stackForRecord, stackForMove, visited);
    }
    return stackForRecord;
  }

  while (true) {
    const visited = Array.from(Array(N), () => Array(N).fill(false));
    let stack = [];

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (!visited[y][x]) {
          const returnValue = checkPopulation(y, x, [], [], visited);
          if (returnValue.length > 0) stack.push([[y, x], ...returnValue]);
        }
      }
    }
    if (stack.length === 0) return answer;

    stack.forEach((value) => {
      let sum = 0;
      value.forEach((location) => {
        sum += land[location[0]][location[1]];
      });
      value.forEach((location) => {
        land[location[0]][location[1]] = parseInt(sum / value.length);
      });
    });

    answer++;
  }
}

console.log(solution(N, L, R, land));
