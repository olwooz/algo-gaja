const S = Number(require('fs').readFileSync('/dev/stdin').toString());

function solution(S) {
  const visited = Array(S + 1)
    .fill()
    .map(() => Array(S + 1).fill(Infinity));
  const queue = [];

  visited[1][0] = 0;
  queue.push([1, 0]);

  while (queue.length > 0) {
    const [count, clipboard] = queue.shift();

    if (count === S) return visited[count][clipboard];

    if (visited[count][count] === Infinity) {
      visited[count][count] = visited[count][clipboard] + 1;
      queue.push([count, count]);
    }

    if (
      count + clipboard <= S &&
      visited[count + clipboard][clipboard] === Infinity
    ) {
      visited[count + clipboard][clipboard] = visited[count][clipboard] + 1;
      queue.push([count + clipboard, clipboard]);
    }

    if (count > 2 && visited[count - 1][clipboard] === Infinity) {
      visited[count - 1][clipboard] = visited[count][clipboard] + 1;
      queue.push([count - 1, clipboard]);
    }
  }
}

console.log(solution(S));
