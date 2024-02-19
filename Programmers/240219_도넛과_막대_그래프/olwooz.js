function solution(edges) {
  let answer = [0, 0, 0, 0];
  const graph = {};

  for (const [from, to] of edges) {
    graph[from] = graph[from] ?? [0, 0];
    graph[to] = graph[to] ?? [0, 0];
    graph[from][1]++;
    graph[to][0]++;
  }

  for (const [node, [from, to]] of Object.entries(graph)) {
    if (from === 0 && to > 1) answer[0] = Number(node);
    if (to === 0) answer[2]++;
    if (from >= 2 && to === 2) answer[3]++;
  }

  answer[1] = graph[answer[0]][1] - (answer[2] + answer[3]);

  return answer;
}
