function solution(edges) {
  const answer = [0, 0, 0, 0];
  const inAndOut = edges.reduce((acc, curr) => {
    acc[curr[0]] ? (acc[curr[0]][1] += 1) : (acc[curr[0]] = [0, 1]);
    acc[curr[1]] ? (acc[curr[1]][0] += 1) : (acc[curr[1]] = [1, 0]);
    return acc;
  }, {});

  for (const key in inAndOut) {
    const [IN, OUT] = inAndOut[key];
    if (OUT === 0) answer[2] += 1;
    if (OUT === 2) {
      IN === 0 ? (answer[0] = Number(key)) : (answer[3] += 1);
      continue;
    }
    if (OUT >= 2) answer[0] = Number(key);
  }

  answer[1] = inAndOut[answer[0]][1] - answer[2] - answer[3];
  return answer;
}
