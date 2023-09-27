function solution(want, number, discount) {
  let answer = 0;
  const wantList = want.reduce((acc, curr, idx) => {
    acc[curr] = number[idx];
    return acc;
  }, {});

  for (let start = 0; start < discount.length - 9; start++) {
    const copyWantList = { ...wantList };
    const discountSlice = discount.slice(start, start + 10);
    discountSlice.forEach((value) => {
      if (copyWantList[value]) copyWantList[value] -= 1;
      if (copyWantList[value] === 0) delete copyWantList[value];
    });
    if (Object.keys(copyWantList).length === 0) answer++;
  }
  return answer;
}
