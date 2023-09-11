function solution(s) {
  let answer = 0;
  const bracket = { "[": "]", "(": ")", "{": "}" };
  let stack = [];

  function test(start, end) {
    for (let i = start; i <= end; i++) {
      if (bracket[s[i]]) {
        stack.push(bracket[s[i]]);
      } else if (stack[stack.length - 1] === s[i]) {
        stack.pop();
      } else if (!bracket[s[i]]) {
        stack.push(s[i]);
      }
    }
  }

  for (let start = 0; start < s.length; start++) {
    stack = [];
    test(start, s.length - 1);
    if (start > 0) {
      test(0, start - 1);
    }
    if (stack.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
