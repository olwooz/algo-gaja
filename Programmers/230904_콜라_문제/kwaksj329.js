function solution(a, b, n) {
  let answer = 0;
  let prev = 0;
  while (n >= a) {
    prev = n;
    n = Math.floor(n / a) * b;
    answer += n;
    n += prev % a;
  }
  return answer;
}
