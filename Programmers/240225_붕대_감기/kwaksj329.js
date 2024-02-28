function solution(bandage, health, attacks) {
  let answer = health;
  const lastTime = attacks[attacks.length - 1][0];
  let success = 0;

  for (let t = 1; t <= lastTime; t++) {
    if (attacks.length > 0 && attacks[0][0] === t) {
      const attack = attacks.shift();
      answer -= attack[1];
      success = 0;
      if (answer <= 0) break;
      continue;
    }
    success++;
    if (answer < health) {
      answer + bandage[1] > health ? (answer = health) : (answer += bandage[1]);
      if (success === bandage[0]) {
        success = 0;
        answer + bandage[2] > health
          ? (answer = health)
          : (answer += bandage[2]);
      }
    }
  }

  return answer <= 0 ? -1 : answer;
}
