function solution(queue1, queue2) {
  let answer = 0;
  let sum1 = queue1.reduce((acc, curr) => acc + curr);
  let sum2 = queue2.reduce((acc, curr) => acc + curr);
  let elementCount = queue1.length;
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < elementCount * 3 - 2; i++) {
    if (sum1 === sum2) {
      return answer;
    } else if (sum1 > sum2) {
      let popNum = queue1[index1++];
      queue2.push(popNum);
      sum1 -= popNum;
      sum2 += popNum;
      answer++;
    } else if (sum1 < sum2) {
      let popNum = queue2[index2++];
      queue1.push(popNum);
      sum1 += popNum;
      sum2 -= popNum;
      answer++;
    }
  }

  return -1;
}
