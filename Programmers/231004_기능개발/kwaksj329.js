function solution(progresses, speeds) {
  const answer = [1];
  const developDays = progresses.reduce((acc, curr, idx) => {
    acc.push(Math.ceil((100 - curr) / speeds[idx]));
    return acc;
  }, []);
  let finishDay = developDays[0];
  for (let i = 1; i < developDays.length; i++) {
    if (finishDay >= developDays[i]) {
      answer[answer.length - 1]++;
    } else {
      answer.push(1);
      finishDay = developDays[i];
    }
  }
  return answer;
}
