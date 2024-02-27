function solution(plans) {
  function convertTime(time) {
    const [hour, min] = time.split(':');
    return Number(hour) * 60 + Number(min);
  }

  const answer = [];

  const assignmentQueue = [];
  const _plans = [...plans];
  let prevEndTime = 0;
  let currentTime = 0;

  _plans.sort((a, b) => a[1].localeCompare(b[1]));

  for (let i = 0; i < _plans.length; i++) {
    const [name, start, playtime] = _plans[i];
    const convertedStartTime = convertTime(start);

    if (prevEndTime < convertedStartTime) {
      let remainingTime = convertedStartTime - currentTime;

      while (assignmentQueue.length > 0) {
        if (remainingTime < assignmentQueue[assignmentQueue.length - 1][1]) {
          assignmentQueue[assignmentQueue.length - 1][1] -= remainingTime;
          currentTime += remainingTime;
          remainingTime = 0;
          break;
        } else {
          remainingTime -= assignmentQueue[assignmentQueue.length - 1][1];
          currentTime += assignmentQueue[assignmentQueue.length - 1][1];
          answer.push(assignmentQueue[assignmentQueue.length - 1][0]);
          assignmentQueue.pop();
        }
      }
    }

    if (i === _plans.length - 1) break;

    const currentEndTime = convertedStartTime + Number(playtime);
    const nextStartTime = convertTime(_plans[i + 1][1]);

    if (currentEndTime <= nextStartTime) {
      currentTime = currentEndTime;
      prevEndTime = currentEndTime;
      answer.push(name);
    } else {
      currentTime = nextStartTime;
      prevEndTime = nextStartTime;
      assignmentQueue.push([name, currentEndTime - nextStartTime]);
    }
  }

  answer.push(_plans[_plans.length - 1][0]);

  assignmentQueue.reverse().forEach((assignment) => {
    answer.push(assignment[0]);
  });

  return answer;
}
