function createCombination(array) {
  return array
    .reduce(
      (combination, element) => [
        ...combination,
        ...addCombinationElement(combination, element),
      ],
      [[]]
    )
    .slice(1);
}

function addCombinationElement(combination, element) {
  return combination.reduce(
    (newCombination, combination) => [
      ...newCombination,
      [...combination, element],
    ],
    []
  );
}

function solution(relation) {
  let _relation = [
    Array.from({ length: relation[0].length }, (_, i) => i),
    ...relation,
  ];

  const combinations = _relation.map((tuple) =>
    createCombination(tuple).map((combination) => combination.join(' '))
  );

  const candidateKeys = [];

  for (let j = 0; j < combinations[0].length; j++) {
    const candidates = new Set();

    let isDuplicate = false;

    for (let i = 0; i < combinations.length; i++) {
      if (candidates.has(combinations[i][j])) {
        isDuplicate = true;
        break;
      }
      candidates.add(combinations[i][j]);
    }

    if (!isDuplicate) candidateKeys.push([...candidates][0]);
  }

  return candidateKeys
    .map((key) => key.split(' '))
    .filter(
      (keys, index, arr) =>
        !arr.some(
          (otherKeys, otherIndex) =>
            index !== otherIndex &&
            otherKeys.every((otherKey) => keys.includes(otherKey))
        )
    ).length;
}
