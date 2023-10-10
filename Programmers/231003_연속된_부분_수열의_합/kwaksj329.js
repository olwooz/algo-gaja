function solution(sequence, k) {
  let end = 0;
  let sum = 0;
  const result = [];

  for (let start = 0; start < sequence.length; start++) {
    while (sum < k && end < sequence.length) {
      sum += sequence[end];
      end++;
    }
    if (sum === k) result.push([start, end - 1, end - 1 - start]);

    sum -= sequence[start];
  }
  result.sort((a, b) => a[2] - b[2]);
  return result[0].slice(0, 2);
}
