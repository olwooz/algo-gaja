const [n, numbers, operators] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((input, i) => {
    if (i === 0) return Number(input);
    return input.split(' ').map(Number);
  });

function solution(n, numbers, operators) {
  let [min, max] = [Infinity, -Infinity];

  function dfs(numberIndex, result) {
    if (numberIndex === n) {
      min = Math.min(min, result);
      max = Math.max(max, result);

      return;
    }

    for (let i = 0; i < 4; i++) {
      if (operators[i] === 0) continue;

      let tempResult = result;

      if (i === 0) tempResult += numbers[numberIndex];
      else if (i === 1) tempResult -= numbers[numberIndex];
      else if (i === 2) tempResult *= numbers[numberIndex];
      else if (i === 3)
        tempResult = Math.trunc(tempResult / numbers[numberIndex]);

      operators[i]--;
      dfs(numberIndex + 1, tempResult);
      operators[i]++;
    }
  }

  dfs(1, numbers[0]);

  return `${max}\n${min}`;
}

console.log(solution(n, numbers, operators));
