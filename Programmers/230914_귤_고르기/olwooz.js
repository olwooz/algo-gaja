function solution(k, tangerine) {
  let answer = 0;
  let numTangerineInBox = 0;

  const tangerineCounts = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  const sortedCounts = Object.values(tangerineCounts).sort((a, b) => b - a);

  while (numTangerineInBox < k && answer < tangerine.length) {
    numTangerineInBox += sortedCounts[answer];
    answer++;
  }

  return answer;
}
