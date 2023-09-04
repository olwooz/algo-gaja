function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const newCokeCount = Math.floor(n / a) * b;
    n = (n % a) + newCokeCount;
    answer += newCokeCount;
  }

  return answer;
}
