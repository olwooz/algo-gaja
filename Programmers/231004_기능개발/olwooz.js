function solution(progresses, speeds) {
  const answer = [];
  const remainingDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let stack = [remainingDays[0]];
  let maxDays = remainingDays[0];

  for (let i = 1; i < remainingDays.length; i++) {
    if (remainingDays[i] > maxDays) {
      maxDays = remainingDays[i];
      answer.push(stack.length);
      stack = [remainingDays[i]];
    } else stack.push(remainingDays[i]);
  }

  if (stack.length > 0) answer.push(stack.length);

  return answer;
}
