function solution(coin, cards) {
  const n = cards.length;
  let answer = 1;
  let index = n / 3;

  function getStartPairs(cards) {
    const _cards = [...cards].sort((a, b) => a - b);
    const startPairs = [];

    let [start, end] = [0, n - 1];

    while (start < end) {
      const sum = _cards[start] + _cards[end];

      if (sum === n + 1) {
        startPairs.push(_cards[start], _cards[end]);
        start++;
        end--;
        continue;
      }

      sum < n + 1 ? start++ : end--;
    }

    return startPairs;
  }

  const startCards = cards.slice(0, index);
  const startPairs = getStartPairs(startCards);
  let pairCount = startPairs.length / 2;

  let leftovers = startCards.filter((card) => !startPairs.includes(card));
  let drawnCards = [];

  function removePairFromLeftovers() {
    const remove = [];
    let found = false;

    for (let i = 0; i < leftovers.length; i++) {
      for (let j = 0; j < drawnCards.length; j++) {
        if (leftovers[i] + drawnCards[j] === n + 1) {
          found = true;
          remove.push(leftovers[i], drawnCards[j]);
          break;
        }
      }
      if (found) break;
    }

    if (found) {
      leftovers = leftovers.filter((card) => card !== remove[0]);
      drawnCards = drawnCards.filter((card) => card !== remove[1]);
    }

    return found;
  }

  function removePairFromDrawnCards() {
    const remove = [];

    let [start, end] = [0, drawnCards.length - 1];
    let found = false;

    drawnCards.sort((a, b) => a - b);

    while (start < end) {
      const sum = drawnCards[start] + drawnCards[end];

      if (sum === n + 1) {
        found = true;
        remove.push(drawnCards[start], drawnCards[end]);
        break;
      }

      sum < n + 1 ? start++ : end--;
    }

    if (found) {
      drawnCards = drawnCards.filter((card) => !remove.includes(card));
    }

    return found;
  }

  while (index < n) {
    let isPass = false;
    drawnCards.push(cards[index], cards[index + 1]);

    if (pairCount > 0) {
      pairCount--;
      isPass = true;
    } else if (coin >= 1 && removePairFromLeftovers()) {
      coin--;
      isPass = true;
    } else if (coin >= 2) {
      coin -= 2;
      isPass = removePairFromDrawnCards();
    }

    if (!isPass) return answer;

    index += 2;
    answer++;
  }

  return answer;
}
