const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [L, C] = input[0].split(' ').map(Number);
const characters = input[1].split(' ').sort();

const vowels = 'aeiou'.split('');

function solution(L, C, characters) {
  const answers = [];

  function isValid(password) {
    const vowelsCount = vowels.filter((vowel) =>
      password.includes(vowel)
    ).length;

    return 0 < vowelsCount && vowelsCount <= L - 2;
  }

  function backtrack(password, lastCharPos) {
    if (password.length === L) {
      if (isValid(password)) answers.push(password);
      return;
    }

    for (let i = lastCharPos + 1; i < C - (L - password.length - 1); i++) {
      backtrack(password + characters[i], i);
    }
  }

  backtrack('', -1);

  answers.forEach((answer) => console.log(answer));
}

solution(L, C, characters);
