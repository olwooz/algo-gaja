const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [m, n] = input[0].split(" ").map(Number);
const tray = [];
for (let i = 1; i <= n; i++) {
  const line = input[i].split(" ").map(Number);
  tray.push(line);
}

const visited = Array.from({ length: n }, () => Array(m).fill(false));
let tempStack = [];

const paintRed = (y, x) => {
  if (x - 1 >= 0 && tray[y][x - 1] === 0) {
    tray[y][x - 1] = 1;
    visited[y][x - 1] = true;
    tempStack.push([y, x - 1]);
  }
  if (y - 1 >= 0 && tray[y - 1][x] === 0) {
    tray[y - 1][x] = 1;
    visited[y - 1][x] = true;
    tempStack.push([y - 1, x]);
  }
  if (x + 1 < m && tray[y][x + 1] === 0) {
    tray[y][x + 1] = 1;
    visited[y][x + 1] = true;
    tempStack.push([y, x + 1]);
  }
  if (y + 1 < n && tray[y + 1][x] === 0) {
    tray[y + 1][x] = 1;
    visited[y + 1][x] = true;
    tempStack.push([y + 1, x]);
  }
};

let answer = 0;
let stack = [];
tray.forEach((line, y) => {
  line.forEach((tomato, x) => {
    if (tomato === 1) {
      stack.push([y, x]);
      visited[y][x] = true;
    } else if (tomato === -1) {
      visited[y][x] = true;
    }
  });
});

while (stack.length > 0) {
  stack.forEach((value) => {
    const [y, x] = value;
    paintRed(y, x);
  });

  if (tempStack.length > 0) {
    stack = tempStack;
    tempStack = [];
  } else {
    break;
  }
  answer++;
}

visited.forEach((line) => {
  line.forEach((value) => {
    if (!value) answer = -1;
  });
});

console.log(answer);
