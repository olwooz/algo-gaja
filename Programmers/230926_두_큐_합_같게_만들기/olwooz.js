function solution(queue1, queue2) {
  let answer = 0;
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

  if ((sum1 + sum2) % 2 === 1) return answer;

  const maxOpsCount = queue1.length * 3 - 2;
  const queue = [...queue1, ...queue2];

  let [left1, right1, left2, right2] = [
    0,
    queue1.length - 1,
    queue1.length,
    queue.length - 1,
  ];

  function normalizeIndex(idx) {
    return idx === queue.length ? 0 : idx;
  }

  while (answer < maxOpsCount) {
    if (sum1 === sum2) return answer;

    if (sum1 < sum2) {
      sum2 -= queue[left2];
      right1 = normalizeIndex(right1 + 1);
      left2 = normalizeIndex(left2 + 1);
      sum1 += queue[right1];
    } else {
      sum1 -= queue[left1];
      left1 = normalizeIndex(left1 + 1);
      right2 = normalizeIndex(right2 + 1);
      sum2 += queue[right2];
    }

    answer++;
  }

  return -1;
}
