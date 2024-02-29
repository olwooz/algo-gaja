function solution(board) {
  function findWinner(board, sign) {
    let win = 0;
    let number = 0;
    const vertical = [0, 0, 0];
    const diagonal = [0, 0];

    board.forEach((line, lIdx) => {
      if (line === sign + sign + sign) win++;
      if (line[lIdx] === sign) diagonal[0] += 1;
      if (line[2 - lIdx] === sign) diagonal[1] += 1;

      line.split('').forEach((value, vIdx) => {
        if (value === sign) {
          number += 1;
          vertical[vIdx] += 1;
        }
      });
    });
    win += vertical.reduce((acc, curr) => (acc += curr === 3), 0);
    win += diagonal.reduce((acc, curr) => (acc += curr === 3), 0);
    return [win, number];
  }

  const [Owin, Onum] = findWinner(board, 'O');
  const [Xwin, Xnum] = findWinner(board, 'X');

  if (!Owin && !Xwin && Onum >= Xnum && Onum - Xnum <= 1) return 1;
  if (!Xwin && Owin && Onum - Xnum === 1) return 1;
  if (!Owin && Xwin && Onum === Xnum) return 1;

  return 0;
}
