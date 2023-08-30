function solution(k, m, score) {
  return score
    .sort((a, b) => b - a)
    .filter((_, index) => (index + 1) % m === 0)
    .reduce((acc, cur) => acc + cur * m, 0);
}
