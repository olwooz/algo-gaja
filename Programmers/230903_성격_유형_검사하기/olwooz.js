function solution(survey, choices) {
  const types = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];
  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  choices.forEach((choice, index) => {
    scores[survey[index][choice < 4 ? 0 : 1]] += Math.abs(choice - 4);
  });

  return types.reduce(
    (acc, type) =>
      acc + (scores[type[0]] >= scores[type[1]] ? type[0] : type[1]),
    ''
  );
}
