function solution(maps) {
  let m = Array(maps.length)
    .fill()
    .map(() => Array(maps[0].length).fill(false));
  m[0][0] = true;

  let queue = [];
  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];
  queue.push([0, 0, 1]);

  while (queue.length > 0) {
    let [x, y, depth] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < m[0].length &&
        ny < m.length &&
        maps[ny][nx] == 1 &&
        !m[ny][nx]
      ) {
        if (nx == m[0].length - 1 && ny == m.length - 1) {
          return ++depth;
        }
        queue.push([nx, ny, depth + 1]);
        m[ny][nx] = true;
      }
    }
  }

  return -1;
}
