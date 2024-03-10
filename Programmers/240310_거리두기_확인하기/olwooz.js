function solution(places) {
  const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
  ];
  const answer = [];

  function isWithinPlace(x, y) {
    return 0 <= x && x < 5 && 0 <= y && y < 5;
  }

  function bfs(place, participants) {
    let isSocialDistanceKept = 1;

    for (const [px, py] of participants) {
      const queue = [];
      const visited = Array(5)
        .fill()
        .map(() => Array(5).fill(false));

      visited[px][py] = true;
      queue.push([px, py, 0]);

      while (queue.length > 0) {
        const [x, y, distance] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];

          if (isWithinPlace(nx, ny) && !visited[nx][ny]) {
            visited[nx][ny] = true;
            const placeObject = place[nx][ny];

            if (placeObject === 'P') return 0;
            if (placeObject === 'O' && distance < 1)
              queue.push([nx, ny, distance + 1]);
          }
        }
      }
    }

    return isSocialDistanceKept;
  }

  places.forEach((place) => {
    const participants = [];

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === 'P') participants.push([i, j]);
      }
    }
    answer.push(bfs(place, participants));
  });

  return answer;
}
