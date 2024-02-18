function solution(n, tops) {
  const cases = Array(n)
    .fill()
    .map(() => [0, 0, 0, 0]);
  cases[0] = tops[0] === 1 ? [1, 1, 1, 1] : [1, 1, 0, 1];

  for (let i = 1; i < n; i++) {
    cases[i][0] =
      (cases[i - 1][0] + cases[i - 1][1] + cases[i - 1][2] + cases[i - 1][3]) %
      10007;
    cases[i][1] = (cases[i - 1][0] + cases[i - 1][1] + cases[i - 1][2]) % 10007;
    cases[i][2] = tops[i] === 1 ? cases[i][0] : 0;
    cases[i][3] = cases[i][0];
  }
  return cases[n - 1].reduce((acc, curr) => acc + curr) % 10007;
}
