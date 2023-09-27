function solution(x, y, n) {
  const queue = [y];
  const cache = Array(y + 1).fill(-1);

  cache[y] = 0;

  while (queue.length > 0) {
    const current = queue.shift();

    for (const next of [current - n, current / 2, current / 3]) {
      if (next === x) return cache[current] + 1;

      if (next > 0 && Number.isInteger(next) && cache[next] === -1) {
        cache[next] = cache[current] + 1;
        queue.push(next);
      }
    }
  }

  return cache[x];
}
