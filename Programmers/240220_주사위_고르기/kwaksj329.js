function solution(dice) {
  const answer = [];
  const aDiceCombi = [];
  const diceIndex = Array(dice.length)
    .fill()
    .map((v, i) => i++);

  function diceCombi(indexArr, combi, num) {
    if (combi.length === num) {
      aDiceCombi.push(combi);
      return;
    }
    for (let i = 0; i < indexArr.length; i++) {
      diceCombi(indexArr.slice(i + 1), [...combi, indexArr[i]], num);
    }
  }
  diceCombi(diceIndex, [], dice.length / 2);

  let sumArr = [];
  function sumCombi(index, diceArr, sum) {
    if (index === dice.length / 2) {
      sumArr.push(sum);
      return;
    }
    for (let i = 0; i < 6; i++) {
      sumCombi(index + 1, diceArr, sum + dice[diceArr[index]][i]);
    }
  }

  const aScore = [];
  for (const a of aDiceCombi) {
    sumArr = [];
    sumCombi(0, a, 0);
    const aDict = sumArr.reduce((acc, curr) => {
      acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1);
      return acc;
    }, {});

    const b = diceIndex.reduce((acc, curr) => {
      if (!a.includes(curr)) acc.push(curr);
      return acc;
    }, []);

    sumArr = [];
    sumCombi(0, b, 0);
    const bDict = sumArr.reduce((acc, curr) => {
      acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1);
      return acc;
    }, {});

    let win = 0;
    for (const [aKey, aValue] of Object.entries(aDict)) {
      for (const [bKey, bValue] of Object.entries(bDict)) {
        if (Number(aKey) > Number(bKey)) win += aValue * bValue;
      }
    }
    aScore.push(win);
  }

  return aDiceCombi[aScore.indexOf(Math.max(...aScore))].map(
    (value) => value + 1
  );
}
