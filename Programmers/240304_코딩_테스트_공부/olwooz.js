function solution(alp, cop, problems) {
  const maxAlp = Math.max(...problems.map((p) => p[0]), alp);
  const maxCop = Math.max(...problems.map((p) => p[1]), cop);
  const c = Array.from(Array(maxAlp + 1), () =>
    Array(maxCop + 1).fill(Infinity)
  );

  c[alp][cop] = 0;

  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      if (i + 1 <= maxAlp) c[i + 1][j] = Math.min(c[i + 1][j], c[i][j] + 1);
      if (j + 1 <= maxCop) c[i][j + 1] = Math.min(c[i][j + 1], c[i][j] + 1);

      problems.forEach(([alp_req, cop_req, alp_rwd, cop_rwd, cost]) => {
        if (i < alp_req || j < cop_req) return;

        const nextAlp = Math.min(maxAlp, i + alp_rwd);
        const nextCop = Math.min(maxCop, j + cop_rwd);

        c[nextAlp][nextCop] = Math.min(c[nextAlp][nextCop], c[i][j] + cost);
      });
    }
  }

  return c[maxAlp][maxCop];
}
