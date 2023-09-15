function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let heavy = people.length - 1;
  let light = 0;

  while (heavy >= light) {
    if (heavy !== light && people[heavy] + people[light] <= limit) {
      answer++;
      heavy--;
      light++;
    } else {
      answer++;
      heavy--;
    }
  }

  return answer;
}
