const [N, values] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v, i) =>
    i === 0
      ? Number(v)
      : v
          .split(' ')
          .map(Number)
          .sort((a, b) => a - b)
  );

function solution(N, values) {
  let [left, right] = [0, N - 1];
  let answer = [Infinity, Infinity];

  while (left < right) {
    const sum = values[left] + values[right];
    answer =
      Math.abs(sum) < Math.abs(answer[0] + answer[1])
        ? [values[left], values[right]]
        : answer;

    if (sum === 0) break;

    sum < 0 ? left++ : right--;
  }

  console.log(answer[0], answer[1]);
}

solution(N, values);
