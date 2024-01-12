const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function solution(stickers, n) {
  const stickerScore = Array(3)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    stickerScore[0][i] =
      Math.max(stickerScore[1][i - 1], stickerScore[2][i - 1]) +
      stickers[0][i - 1];
    stickerScore[1][i] =
      Math.max(stickerScore[0][i - 1], stickerScore[2][i - 1]) +
      stickers[1][i - 1];
    stickerScore[2][i] = Math.max(
      stickerScore[0][i - 1],
      stickerScore[1][i - 1]
    );
  }
  console.log(
    Math.max(stickerScore[0][n], stickerScore[1][n], stickerScore[2][n])
  );
}

for (let i = 0; i < input[0]; i++) {
  const n = Number(input[i * 3 + 1]);
  const stickers = [
    input[i * 3 + 2].split(' ').map(Number),
    input[i * 3 + 3].split(' ').map(Number),
  ];
  solution(stickers, n);
}
