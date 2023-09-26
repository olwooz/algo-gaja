function solution(x, y, n) {
  let answer = -1;
  let queue = [y];
  let visited = Array(y + 1).fill(-1);
  visited[y] = 0;

  function checkInteger(shiftNum, number) {
    if (number >= 1 && Number.isInteger(number) && visited[number] === -1) {
      visited[number] = visited[shiftNum] + 1;
      queue.push(number);
      return true;
    }
  }

  while (queue.length > 0) {
    let number = queue.shift();
    if (number === x) {
      return visited[number];
    }
    checkInteger(number, number - n);
    checkInteger(number, number / 2);
    checkInteger(number, number / 3);
  }
  return answer;
}
