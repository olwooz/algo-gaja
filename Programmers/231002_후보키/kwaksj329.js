const getCombinations = (arr, num) => {
  const results = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
    const attached = combinations.map((v) => [fixed, ...v]);

    results.push(...attached);
  });

  return results;
};

function solution(relation) {
  const answer = [];
  const beforeMinimal = [];
  const relationLength = relation.length;
  const combination = Array(relation[0].length)
    .fill()
    .map((v, i) => {
      return i;
    });

  for (let i = 1; i < relation[0].length + 1; i++) {
    const columns = getCombinations(combination, i);

    columns.forEach((idxs) => {
      let column = [];
      relation.forEach((value) => {
        let data = "";
        idxs.forEach((idx) => {
          data += value[idx];
        });
        column.push(data);
      });
      column = [...new Set(column)];
      if (column.length === relationLength) beforeMinimal.push(idxs);
    });
  }

  beforeMinimal.forEach((value) => {
    if (answer.length === 0) {
      answer.push(value);
    } else {
      let include = false;
      answer.forEach((index) => {
        if (index.every((i) => value.includes(i))) include = true;
      });
      if (!include) answer.push(value);
    }
  });

  return answer.length;
}
