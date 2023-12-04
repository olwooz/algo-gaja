const [n, k] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(n, k) {
  if (n >= k) return n - k;

  const visited = Array(100001).fill(Infinity);
  const queue = [n];
  let index = 0;
  visited[n] = 0;

  while (index < queue.length) {
    const current = queue[index++];

    if (current === k) return visited[current];

    for (let next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next > 100000 || visited[next] <= visited[current])
        continue;

      visited[next] = visited[current] + 1;
      queue.push(next);
    }
  }
}

console.log(solution(n, k));
