const [[N, M], [r, c, d], ...room] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

function solution(N, M, r, c, d, room) {
  const [dr, dc] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];
  let answer = 0;
  let isRunning = true;

  function isWithinRoom(r, c) {
    return 0 <= r && r < N && 0 <= c && c < M;
  }

  function isAllCleaned() {
    for (let i = 0; i < 4; i++) {
      const [nextR, nextC] = [r + dr[i], c + dc[i]];
      if (isWithinRoom(nextR, nextC) && room[nextR][nextC] === 0) return false;
    }

    return true;
  }

  function isFrontCleaned() {
    const [nextR, nextC] = [r + dr[d], c + dc[d]];
    return !isWithinRoom(nextR, nextC) || room[nextR][nextC] > 0;
  }

  function goForward() {
    const [nextR, nextC] = [r + dr[d], c + dc[d]];

    r = nextR;
    c = nextC;
  }

  function goBack() {
    const [nextR, nextC] = [r - dr[d], c - dc[d]];

    if (!isWithinRoom(nextR, nextC) || room[nextR][nextC] === 1) {
      isRunning = false;
      return;
    }

    r = nextR;
    c = nextC;
  }

  function rotate() {
    d = d > 0 ? d - 1 : 3;
  }

  while (isRunning) {
    if (room[r][c] === 0) {
      room[r][c] = 2;
      answer++;
    }

    if (isAllCleaned()) {
      goBack();
    } else {
      do {
        rotate();
      } while (isFrontCleaned());
      goForward();
    }
  }

  console.log(answer);
}

solution(N, M, r, c, d, room);
