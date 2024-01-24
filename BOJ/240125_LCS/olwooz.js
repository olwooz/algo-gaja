const [s1, s2] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution(s1, s2) {
  const cache = Array(s1.length + 1)
    .fill()
    .map(() => Array(s2.length + 1).fill(0));

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        cache[i][j] = cache[i - 1][j - 1] + 1;
      } else {
        cache[i][j] = Math.max(cache[i][j - 1], cache[i - 1][j]);
      }
    }
  }

  console.log(cache[s1.length][s2.length]);
}

solution(s1, s2);
