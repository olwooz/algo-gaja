function solution([t, x, y], health, attacks) {
  let answer = health;
  let prevTime = 0;

  for (const [time, damage] of attacks) {
    const elapsedTime = time - prevTime - 1;
    const recovery = elapsedTime * x;
    const additionalRecovery = Math.floor(elapsedTime / t) * y;

    answer = Math.min(health, answer + recovery + additionalRecovery) - damage;

    if (answer <= 0) return -1;

    prevTime = time;
  }

  return answer;
}
