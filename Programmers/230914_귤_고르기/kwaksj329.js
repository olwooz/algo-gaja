function solution(k, tangerine) {
  let answer = 0;
  let tangerineSum = tangerine.reduce((acc, curr) => {
    curr in acc ? (acc[curr] += 1) : (acc[curr] = 1);
    return acc;
  }, {});

  let valueSorted = Object.keys(tangerineSum)
    .map((item) => tangerineSum[item])
    .sort((a, b) => b - a);

  for (let i = 0; i < valueSorted.length; i++) {
    answer++;
    k -= valueSorted[i];
    if (k <= 0) {
      break;
    }
  }
  return answer;
}
