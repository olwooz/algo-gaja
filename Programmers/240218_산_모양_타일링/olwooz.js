const MOD = 10007;

function solution(n, tops) {
  const cache = Array(n)
    .fill()
    .map(() => Array(4).fill(0));
  cache[0] = tops[0] === 0 ? [1, 1, 1, 0] : [1, 1, 1, 1];

  for (let i = 1; i < n; i++) {
    cache[i][0] =
      (cache[i - 1][0] + cache[i - 1][1] + cache[i - 1][2] + cache[i - 1][3]) %
      MOD;
    cache[i][1] = (cache[i - 1][0] + cache[i - 1][1] + cache[i - 1][3]) % MOD;
    cache[i][2] = cache[i][0];
    cache[i][3] = tops[i] === 0 ? 0 : cache[i][0];
  }

  return cache[n - 1].reduce((acc, cur) => acc + cur, 0) % MOD;
}
