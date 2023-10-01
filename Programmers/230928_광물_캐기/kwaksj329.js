function solution(picks, minerals) {
  let answer = 0;
  const picksName = ["diamond", "iron", "stone"];
  const picksSum = picks.reduce((acc, curr) => acc + curr);
  const mineralSlice = minerals.slice(0, picksSum * 5);
  const tiredLevel = {
    "diamond diamond": 1,
    "iron diamond": 5,
    "stone diamond": 25,
    "diamond iron": 1,
    "iron iron": 1,
    "stone iron": 5,
    "diamond stone": 1,
    "iron stone": 1,
    "stone stone": 1,
  };

  const scores = [];
  for (let i = 0; i < mineralSlice.length / 5; i++) {
    const fiveMinerals = mineralSlice.slice(i * 5, i * 5 + 5);
    const threePicksScore = [];
    for (const pick of picksName) {
      let fiveScore = 0;
      fiveMinerals.forEach((value) => {
        fiveScore += tiredLevel[[pick, value].join(" ")];
      });
      threePicksScore.push(fiveScore);
    }
    scores.push([Math.max.apply(null, threePicksScore), fiveMinerals]);
  }

  scores.sort((a, b) => b[0] - a[0]);
  scores.forEach((value) => {
    if (picks[0] > 0) {
      value[1].forEach((mineral) => {
        answer += tiredLevel[["diamond", mineral].join(" ")];
      });
      picks[0] -= 1;
    } else if (picks[1] > 0) {
      value[1].forEach((mineral) => {
        answer += tiredLevel[["iron", mineral].join(" ")];
      });
      picks[1] -= 1;
    } else if (picks[2] > 0) {
      value[1].forEach((mineral) => {
        answer += tiredLevel[["stone", mineral].join(" ")];
      });
      picks[2] -= 1;
    }
  });

  return answer;
}
