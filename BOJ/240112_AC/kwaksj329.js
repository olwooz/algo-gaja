const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function solution(functionP, n, testCase) {
  let reversed = false;
  let startEnd = [0, n - 1];
  testCase = testCase.slice(1, -1).split(',');

  for (let word = 0; word < functionP.length; word++) {
    if (functionP[word] === 'R') {
      reversed = !reversed;
    } else {
      n--;
      reversed
        ? (startEnd = [startEnd[0], startEnd[1] - 1])
        : (startEnd = [startEnd[0] + 1, startEnd[1]]);
    }
  }

  let answer = [];
  if (n < 0) return 'error';
  if (reversed) {
    for (let i = startEnd[1]; i >= startEnd[0]; i--) {
      answer.push(testCase[i]);
    }
  } else {
    answer = testCase.slice(startEnd[0], startEnd[1] + 1);
  }
  return '[' + answer.join(',') + ']';
}

for (let i = 0; i < input[0]; i++) {
  console.log(
    solution(input[i * 3 + 1], Number(input[i * 3 + 2]), input[i * 3 + 3])
  );
}
