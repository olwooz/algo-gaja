const S = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)[0];
console.log(solution(S));

function solution(S) {
  const queue = [[1, 0, 0]];
  const visited = Array(1001)
    .fill()
    .map(() => Array(1001).fill(false));
  visited[1][0] = true;

  while (queue.length > 0) {
    const [sum, copy, time] = queue.shift();

    if (sum !== copy && !visited[sum][sum]) {
      queue.push([sum, sum, time + 1]);
      visited[sum][sum] = true;
    }

    if (sum + copy <= 1000 && !visited[sum + copy][copy]) {
      if (sum + copy === S) return time + 1;
      queue.push([sum + copy, copy, time + 1]);
      visited[sum + copy][copy] = true;
    }

    if (sum - 1 >= 2 && !visited[sum - 1][copy]) {
      if (sum - 1 === S) return time + 1;
      queue.push([sum - 1, copy, time + 1]);
      visited[sum - 1][copy] = true;
    }
  }
}
