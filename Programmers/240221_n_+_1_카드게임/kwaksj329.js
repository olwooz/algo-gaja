function solution(coin, cards) {
  let answer = 1;
  const matchNumber = cards.length + 1;
  const hold = Array(cards.length + 1).fill(false);
  cards.slice(0, cards.length / 3).forEach((value) => (hold[value] = true));
  const keep = Array(cards.length + 1).fill(false);
  let found = true;
  let lastIdx = cards.length / 3;

  while (found) {
    found = false;
    if (lastIdx === matchNumber - 1) break;
    cards.slice(lastIdx, lastIdx + 2).forEach((value) => {
      keep[value] = true;
    });
    lastIdx += 2;

    for (let i = 1; i < matchNumber; i++) {
      if (hold[i] && hold[matchNumber - i]) {
        answer += 1;
        hold[i] = false;
        hold[matchNumber - i] = false;
        found = true;
        break;
      }
    }

    if (found) continue;

    for (let i = 1; i < matchNumber; i++) {
      if (hold[i] && keep[matchNumber - i] && coin > 0) {
        answer += 1;
        hold[i] = false;
        keep[matchNumber - i] = false;
        coin--;
        found = true;
        break;
      }
    }

    if (found) continue;

    for (let i = 1; i < matchNumber; i++) {
      if (keep[i] && keep[matchNumber - i] && coin > 1) {
        answer += 1;
        keep[i] = false;
        keep[matchNumber - i] = false;
        coin -= 2;
        found = true;
        break;
      }
    }
  }
  return answer;
}
