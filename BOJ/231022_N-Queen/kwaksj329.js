let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = Number(input);
let answer = 0;

const validation = (num, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return false;
    const difference = Math.abs(arr.length - i);
    if (num === arr[i] + difference || num === arr[i] - difference)
      return false;
  }
  return true;
};

const DFS = (answerArr) => {
  if (answerArr.length === input) {
    answer++;
  } else {
    for (let i = 0; i < input; i++) {
      if (validation(i, answerArr)) {
        const newArr = answerArr.slice();
        newArr.push(i);
        DFS(newArr);
      }
    }
  }
};

for (let i = 0; i < input; i++) {
  DFS([i]);
}

console.log(answer);
