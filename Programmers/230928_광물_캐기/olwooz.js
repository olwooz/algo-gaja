const MAX_TIREDNESS = 25 * 50 + 1;
const tirednessTable = [
  [1, 1, 1],
  [5, 1, 1],
  [25, 5, 1],
];
const mineralMap = {
  diamond: 0,
  iron: 1,
  stone: 2,
};

function getTiredness(pick, minerals) {
  return minerals.reduce(
    (acc, cur) => acc + tirednessTable[pick][mineralMap[cur]],
    0
  );
}

function solution(picks, minerals) {
  if (Math.max(...picks) === 0 || minerals.length === 0) return 0;

  const currentMinerals = minerals.slice(0, 5);
  const nextMinerals = minerals.slice(5);

  return Math.min(
    ...picks.map((pick, index) => {
      if (pick === 0) return MAX_TIREDNESS;

      const nextPicks = [...picks];
      nextPicks[index]--;
      return (
        getTiredness(index, currentMinerals) + solution(nextPicks, nextMinerals)
      );
    })
  );
}
