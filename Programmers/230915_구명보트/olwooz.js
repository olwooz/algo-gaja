function solution(people, limit) {
  let answer = 0;
  let [start, end] = [0, people.length - 1];

  people.sort((a, b) => b - a);

  while (start < end) {
    if (people[start] + people[end] <= limit) {
      end--;
    }
    start++;
    answer++;
  }

  if (start === end) answer++;

  return answer;
}
