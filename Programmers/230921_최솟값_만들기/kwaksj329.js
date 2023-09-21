function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.forEach((value, idx) => (answer += value * B[idx]));
  return answer;
}
