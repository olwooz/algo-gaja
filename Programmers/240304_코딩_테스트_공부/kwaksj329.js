function solution(alp, cop, problems) {
  const maxAlp = Math.max(alp, ...problems.map((value) => value[0]));
  const maxCop = Math.max(cop, ...problems.map((value) => value[1]));
  const records = Array(maxAlp + 1)
    .fill()
    .map(() => Array(maxCop + 1).fill(Infinity));
  records[alp][cop] = 0;
  problems.push([0, 0, 1, 0, 1]);
  problems.push([0, 0, 0, 1, 1]);

  for (let algo = alp; algo <= maxAlp; algo++) {
    for (let coding = cop; coding <= maxCop; coding++) {
      problems.forEach(([alp_req, cop_req, alp_rwd, cop_rwd, cost]) => {
        if (algo >= alp_req && coding >= cop_req) {
          const newAlgo = algo + alp_rwd <= maxAlp ? algo + alp_rwd : maxAlp;
          const newCoding =
            coding + cop_rwd <= maxCop ? coding + cop_rwd : maxCop;
          records[newAlgo][newCoding] = Math.min(
            records[newAlgo][newCoding],
            records[algo][coding] + cost
          );
        }
      });
    }
  }
  return records[maxAlp][maxCop];
}
