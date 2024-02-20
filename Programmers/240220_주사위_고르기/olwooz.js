function solution(dice) {
  const n = dice.length;
  let maxWinCount = 0;
  let answer = [];

  function getCombinations() {
    const combinations = [];

    function generateCombinations(start, combination) {
      if (combination.length === n / 2) {
        combinations.push(combination);
        return;
      }

      for (let i = start; i < n; i++) {
        generateCombinations(i + 1, [...combination, i + 1]);
      }
    }

    generateCombinations(0, []);
    return combinations;
  }

  function getCounterpartChoices(choices) {
    const counterpartChoices = [];

    for (let i = 1; i <= n; i++) {
      if (!choices.includes(i)) counterpartChoices.push(i);
    }

    return counterpartChoices;
  }

  function getSums(choices) {
    const sums = {};

    function getSum(sum, index) {
      if (index === n / 2) {
        sums[sum] = sums[sum] ? sums[sum] + 1 : 1;
        return;
      }

      for (let i = 0; i < 6; i++) {
        getSum(sum + dice[choices[index] - 1][i], index + 1);
      }
    }

    getSum(0, 0);
    return sums;
  }

  const diceChoices = getCombinations();

  for (const choices of diceChoices) {
    const sumsA = getSums(choices);
    const sumsB = getSums(getCounterpartChoices(choices));

    let winCount = 0;

    for (const [scoreA, countA] of Object.entries(sumsA)) {
      for (const [scoreB, countB] of Object.entries(sumsB)) {
        if (Number(scoreA) > Number(scoreB)) winCount += countA * countB;
      }
    }

    if (winCount > maxWinCount) {
      answer = choices;
      maxWinCount = winCount;
    }
  }

  return answer;
}
