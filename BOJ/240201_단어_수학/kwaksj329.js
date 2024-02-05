const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const words = input.slice(1, N + 1).map((value) => {
  return value.split('');
});
console.log(solution(N, words));

function solution(N, words) {
  const alphabetCount = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .reduce((acc, curr) => {
      acc[curr] = 0;
      return acc;
    }, {});

  words.forEach((word) => {
    word.forEach((letter, idx) => {
      alphabetCount[letter] += 10 ** (word.length - idx - 1);
    });
  });

  let maxNumber = 9;
  return Object.values(alphabetCount)
    .sort((a, b) => b - a)
    .reduce((acc, curr) => {
      acc += curr * maxNumber;
      maxNumber--;
      return acc;
    }, 0);
}
