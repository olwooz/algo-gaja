const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [L, C] = input[0].split(' ').map(Number);
const letters = input[1].split(' ').sort();
solution(L, C, letters).forEach((value) => console.log(value));

function solution(L, C, letters) {
  const answer = [];

  function checkAEIOU(letter) {
    return (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    );
  }
  selectNext(0, true, false, 0, '');
  selectNext(0, false, false, 0, '');

  function selectNext(idx, include, AEIOU, notAEIOU, password) {
    if (idx >= C) return;
    if (include) {
      password = password + letters[idx];
      checkAEIOU(letters[idx]) ? (AEIOU = true) : (notAEIOU += 1);
    }
    if (password.length === L) {
      if (AEIOU && notAEIOU >= 2) answer.push(password);
      return;
    }
    selectNext(idx + 1, true, AEIOU, notAEIOU, password);
    selectNext(idx + 1, false, AEIOU, notAEIOU, password);
  }
  return answer;
}
