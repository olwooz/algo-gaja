const [subin, sis] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const visited = Array.from({ length: 100001 }, () => 0);

function solution(subin, sis) {
  const queue = [subin];
  while (queue.length > 0) {
    subin = queue.shift();

    if (subin === sis) {
      console.log(visited[subin]);
      break;
    }

    for (const distance of [subin - 1, subin + 1, subin * 2]) {
      if (distance >= 0 && distance <= 100000 && visited[distance] === 0) {
        visited[distance] = visited[subin] + 1;
        queue.push(distance);
      }
    }
  }
}

solution(subin, sis);
