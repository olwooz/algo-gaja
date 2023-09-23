function solution(s) {
  let numbers = s.split(" ").sort((a, b) => a - b);
  return numbers[0] + " " + numbers[numbers.length - 1];
}
