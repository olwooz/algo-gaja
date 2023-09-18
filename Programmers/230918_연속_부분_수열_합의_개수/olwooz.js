function solution1(elements) {
  const elementCount = elements.length;
  const circularElements = elements.concat(elements.slice(0, elementCount - 1));

  return new Set(
    elements
      .map((_, index) =>
        circularElements
          .slice(index, index + elementCount)
          .reduce((acc, cur) => [...acc, (acc[acc.length - 1] ?? 0) + cur], [])
      )
      .flat()
  ).size;
}

function solution2(elements) {
  const elementCount = elements.length;
  const circularElements = elements.concat(elements.slice(0, elementCount - 1));
  const sums = new Set();

  for (let i = 0; i < elementCount; i++) {
    let sum = 0;
    for (let j = 0; j < elementCount; j++) {
      sum += circularElements[i + j];
      sums.add(sum);
    }
  }

  return sums.size;
}
