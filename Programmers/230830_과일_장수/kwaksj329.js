function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  let remain = score.length % m;
  if (remain !== 0) {
    for (let i = 0; i < remain; i++) {
      score.pop();
    }
  }
  for (let j = m - 1; j < score.length; j += m) {
    answer += score[j] * m;
  }
  return answer;
}
