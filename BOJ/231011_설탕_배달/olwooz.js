const BAG_SIZES = [3, 5];

function solution(N) {
  const cache = Array(N + 1).fill(Infinity);
  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [weight, bagCount] = queue.shift();

    BAG_SIZES.forEach((size) => {
      const nextWeight = weight + size;
      const nextBagCount = bagCount + 1;

      if (nextWeight > N || cache[nextWeight] <= nextBagCount) return;

      cache[nextWeight] = nextBagCount;
      queue.push([nextWeight, nextBagCount]);
    });
  }

  return cache[N] === Infinity ? -1 : cache[N];
}

const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

console.log(solution(N));
