function connectedTowers(n, wires, cutWire, startPoint) {
  const connectedInfo = {};
  const visited = Array(n).fill(false);
  const queue = [cutWire[startPoint]];
  const result = [cutWire[startPoint]];
  for (let i = 0; i < n; i++) connectedInfo[i + 1] = [];

  wires.forEach((value) => {
    if (value[0] !== cutWire[0] || value[1] !== cutWire[1]) {
      connectedInfo[value[0]].push(value[1]);
      connectedInfo[value[1]].push(value[0]);
    }
  });

  while (queue.length > 0) {
    const tower = queue.shift();
    visited[tower] = true;
    connectedInfo[tower].forEach((nextTower) => {
      if (!visited[nextTower]) {
        queue.push(nextTower);
        result.push(nextTower);
      }
    });
  }
  return result.length;
}

function solution(n, wires) {
  const answer = [];
  for (let i = 0; i < wires.length; i++) {
    answer.push(
      Math.abs(
        connectedTowers(n, wires, wires[i], 0) -
          connectedTowers(n, wires, wires[i], 1)
      )
    );
  }
  return Math.min(...answer);
}
