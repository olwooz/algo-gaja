function solution(elements) {
  let answer = [];
  const extended = [...elements, ...elements];

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const subset = extended.slice(j, i + j + 1);
      answer.push(subset.reduce((acc, curr) => acc + curr, 0));
    }
  }
  const dedupe = new Set(answer);
  return [...dedupe].length;
}
