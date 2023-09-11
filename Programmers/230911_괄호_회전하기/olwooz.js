const OPEN_PARENTHESES = ['[', '{', '('];
const COUNTERPARTS = {
  ']': '[',
  '}': '{',
  ')': '(',
};

function isValid(parentheses) {
  if (parentheses.length % 2 == 1) return false;

  const stack = [];

  parentheses.forEach((parenthesis) => {
    if (OPEN_PARENTHESES.includes(parenthesis)) stack.push(parenthesis);
    else if (COUNTERPARTS[parenthesis] === stack[stack.length - 1]) stack.pop();
    else return false;
  });

  return stack.length === 0;
}

function rotateLeft(parentheses) {
  return [...parentheses.slice(1), parentheses[0]];
}

function solution(s) {
  let answer = 0;
  let parentheses = s.split('');

  for (let i = 0; i < parentheses.length; i++) {
    if (isValid(parentheses)) answer++;
    parentheses = rotateLeft(parentheses);
  }

  return answer;
}
