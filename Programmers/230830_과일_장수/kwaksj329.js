function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let j = m - 1; j < score.length; j += m) {
    answer += score[j] * m;
  }
  return answer;
}
