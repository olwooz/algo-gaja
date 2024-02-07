const [[N, d, k, c], ...belt] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line, i) => (i === 0 ? line.split(' ').map(Number) : Number(line)));

function solution(N, d, k, c, belt) {
  const extendedBelt = belt.concat(belt);
  const sushiCount = Object.fromEntries(belt.map((sushi) => [sushi, 0]));
  sushiCount[c] = 0;

  let answer = 0;
  let kind = 0;
  let [start, end] = [0, k - 1];

  for (let i = 0; i < k; i++) {
    const sushi = belt[i];
    if (sushiCount[sushi] === 0) kind++;
    sushiCount[sushi]++;
  }

  answer = sushiCount[c] === 0 ? kind + 1 : kind;

  for (let i = 0; i < N; i++) {
    sushiCount[extendedBelt[start]]--;
    if (sushiCount[extendedBelt[start]] === 0) kind--;
    start++;

    end++;
    if (sushiCount[extendedBelt[end]] === 0) kind++;
    sushiCount[extendedBelt[end]]++;

    answer = Math.max(answer, sushiCount[c] === 0 ? kind + 1 : kind);
  }

  console.log(answer);
}

solution(N, d, k, c, belt);
