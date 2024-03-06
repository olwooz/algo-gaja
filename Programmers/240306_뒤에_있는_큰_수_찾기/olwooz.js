function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    if (stack.length === 0) {
      stack = [i];
      answer[i] = -1;
      continue;
    }

    while (stack.length > 0) {
      const idx = stack.pop();

      if (numbers[i] > numbers[idx]) {
        answer[idx] = numbers[i];
      } else {
        stack.push(idx);
        break;
      }
    }

    stack.push(i);
  }

  return answer;
}
