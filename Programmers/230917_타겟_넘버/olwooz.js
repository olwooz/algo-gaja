function solution(numbers, target) {
  let answer = 0;
  const stack = [
    [numbers[0], 0],
    [-numbers[0], 0],
  ];

  while (stack.length > 0) {
    const [currentNumber, index] = stack.pop();
    const nextIndex = index + 1;

    if (nextIndex === numbers.length) {
      if (currentNumber === target) answer++;
      continue;
    }

    stack.push([currentNumber + numbers[nextIndex], nextIndex]);
    stack.push([currentNumber - numbers[nextIndex], nextIndex]);
  }

  return answer;
}
