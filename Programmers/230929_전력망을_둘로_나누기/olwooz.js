function isDisconnected(current, next, wire) {
  return (
    (current === wire[0] && next === wire[1]) ||
    (current === wire[1] && next === wire[0])
  );
}

function solution(n, wires) {
  const connection = Array(n + 1)
    .fill()
    .map(() => []);

  wires.forEach((wire) => {
    connection[wire[0]].push(wire[1]);
    connection[wire[1]].push(wire[0]);
  });

  return Math.min(
    ...wires.map((wire) => {
      const stack = [1];
      const visited = Array(n + 1).fill(false);

      let towerCount = 1;

      visited[1] = true;

      while (stack.length > 0) {
        const current = stack.pop();

        for (const next of connection[current]) {
          if (visited[next] || isDisconnected(current, next, wire)) continue;

          towerCount++;
          visited[next] = true;
          stack.push(next);
        }
      }

      return Math.abs(towerCount - (n - towerCount));
    })
  );
}
