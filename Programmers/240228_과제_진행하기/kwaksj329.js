function solution(plans) {
  const answer = [];
  plans.forEach((value, idx) => {
    const [h, m] = value[1].split(':').map(Number);
    plans[idx][1] = h * 60 + m;
    plans[idx][2] = Number(value[2]);
  });
  plans.sort((a, b) => a[1] - b[1]);

  function popAgain(stack, currentTime, next) {
    if (stack.length === 0) return;

    const stackTask = stack[stack.length - 1];
    if (currentTime + stackTask[2] <= next) {
      answer.push(stack.pop()[0]);
      popAgain(stack, currentTime + stackTask[2], next);
    } else {
      stack[stack.length - 1][2] -= next - currentTime;
    }
  }

  const stack = [];
  for (let i = 0; i < plans.length; i++) {
    if (stack.length === 0) {
      stack.push(plans[i]);
      continue;
    }

    let stackTask = stack[stack.length - 1];
    if (stackTask[1] + stackTask[2] <= plans[i][1]) {
      popAgain(stack, stackTask[1], plans[i][1]);
    } else {
      stack[stack.length - 1][2] -= plans[i][1] - stackTask[1];
    }
    stack.push(plans[i]);
  }

  while (stack.length > 0) {
    answer.push(stack.pop()[0]);
  }
  return answer;
}
