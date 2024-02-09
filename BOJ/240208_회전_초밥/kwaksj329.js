const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, d, k, c] = input[0].split(' ').map(Number);
const sushi = input.slice(1, N + 1).map((value) => {
  return Number(value);
});
console.log(solution(N, d, k, c, sushi));

function solution(N, d, k, c, sushi) {
  const sushiList = [...sushi, ...sushi];
  const sushiNumber = Array(d + 1).fill(0);
  let start = 0;
  let answer = 0;
  let maxAnswer = 0;

  while (start < N) {
    if (start === 0) {
      for (let i = 0; i < k; i++) {
        sushiNumber[sushiList[i]] += 1;
      }
      answer = Object.values(sushiNumber).reduce((acc, curr) => {
        if (curr > 0) acc += 1;
        return acc;
      }, 0);
      maxAnswer = Math.max(answer + (sushiNumber[c] === 0 ? 1 : 0), maxAnswer);
      start++;
      continue;
    }

    if (sushiList[start - 1] === sushiList[start + k - 1]) {
      start++;
      continue;
    }

    sushiNumber[sushiList[start - 1]] -= 1;
    sushiNumber[sushiList[start + k - 1]] += 1;
    if (sushiNumber[sushiList[start - 1]] === 0) answer--;
    if (sushiNumber[sushiList[start + k - 1]] === 1) answer++;
    maxAnswer = Math.max(answer + (sushiNumber[c] === 0 ? 1 : 0), maxAnswer);
    start++;
  }
  return maxAnswer;
}
