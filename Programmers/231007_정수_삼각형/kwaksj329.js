function solution(triangle) {
  for (let i = 0; i < triangle.length - 1; i++) {
    for (let j = 0; j < triangle[i + 1].length; j++) {
      if (j === 0) {
        triangle[i + 1][j] += triangle[i][0];
      } else if (j === triangle[i + 1].length - 1) {
        triangle[i + 1][j] += triangle[i][triangle[i].length - 1];
      } else {
        let a = triangle[i][j - 1];
        let b = triangle[i][j];
        triangle[i + 1][j] += Math.max(a, b);
      }
    }
  }

  return Math.max(...triangle[triangle.length - 1]);
}
