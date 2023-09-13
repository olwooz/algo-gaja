function solution(maps) {
  const answer = [];
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );

  function findIsland(y, x) {
    let currentSum = Number(maps[y][x]);

    for (let i = 0; i < 4; i++) {
      const movedY = y + dy[i];
      const movedX = x + dx[i];
      if (
        movedY >= 0 &&
        movedY < maps.length &&
        movedX >= 0 &&
        movedX < maps[0].length &&
        maps[movedY][movedX] !== "X" &&
        !visited[movedY][movedX]
      ) {
        visited[movedY][movedX] = true;
        currentSum += findIsland(movedY, movedX);
      }
    }
    return currentSum;
  }

  for (let y = 0; y < maps.length; y++) {
    for (let x = 0; x < maps[0].length; x++) {
      if (maps[y][x] !== "X" && !visited[y][x]) {
        visited[y][x] = true;
        answer.push(findIsland(y, x));
      }
    }
  }
  if (answer.length === 0) {
    return [-1];
  }
  answer.sort((a, b) => a - b);
  return answer;
}
