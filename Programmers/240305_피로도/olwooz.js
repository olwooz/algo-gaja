function solution(k, dungeons, count = 0) {
  let answer = count;

  for (let i = 0; i < dungeons.length; i++) {
    if (k < dungeons[i][0]) continue;

    answer = Math.max(
      answer,
      solution(
        k - dungeons[i][1],
        [...dungeons.slice(0, i), ...dungeons.slice(i + 1)],
        count + 1
      )
    );
  }

  return answer;
}
