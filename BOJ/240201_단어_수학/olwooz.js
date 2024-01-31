const [, ...words] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function solution(words) {
  const letterCount = Object.fromEntries(
    ALPHABETS.map((letter) => [letter, 0])
  );

  words.forEach((word) => {
    let digits = word.length;

    for (const letter of word) {
      letterCount[letter] += 10 ** (digits - 1);
      digits--;
    }
  });

  return Object.values(letterCount)
    .sort((a, b) => b - a)
    .reduce((acc, cur, i) => acc + cur * (9 - i), 0);
}

console.log(solution(words));
