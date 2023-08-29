function solution(numbers) {
  Array.prototype.toSorted = function () {
    const sortedArr = [...this];
    sortedArr.sort((a, b) => a - b);

    return sortedArr;
  };

  return [
    ...new Set(
      numbers
        .reduce(
          (acc, number1, index) => [
            ...acc,
            ...numbers.slice(index + 1).map((number2) => number1 + number2),
          ],
          []
        )
        .toSorted()
    ),
  ];
}
