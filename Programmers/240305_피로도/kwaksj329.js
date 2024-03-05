function solution(k, dungeons) {
  let maxAnswer = 0;
  const visited = Array(dungeons.length).fill(false);

  function dfs(k, answer) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = true;
        k -= dungeons[i][1];
        maxAnswer = Math.max(maxAnswer, answer + 1);
        dfs(k, answer + 1);
        visited[i] = false;
        k += dungeons[i][1];
      }
    }
  }

  dfs(k, 0);
  return maxAnswer;
}
