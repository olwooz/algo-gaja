function solution(sequence, k) {
  const candidates = [];

  let [left, right] = [0, 0];
  let currentSum = sequence[0];

  while (left <= right && right < sequence.length) {
    if (currentSum === k) {
      candidates.push([right - left, left, right]);
    }

    if (currentSum >= k) {
      currentSum -= sequence[left];
      left++;
    } else {
      right++;
      currentSum += sequence[right];
    }
  }

  candidates.sort((a, b) => a[0] - b[0]);

  return candidates[0].slice(1);
}
