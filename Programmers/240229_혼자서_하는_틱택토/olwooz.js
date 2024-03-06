function checkWin(board, player) {
  const R = board.length;
  const C = board[0].length;

  for (let row of board) {
    const start = row[0];

    if (start !== player) continue;

    let count = 0;

    for (let col of row) {
      if (col !== start) {
        break;
      }
      count++;
    }

    if (count === 3) return true;
  }

  for (let c = 0; c < C; c++) {
    const start = board[0][c];

    if (start !== player) continue;

    let count = 0;

    for (let row of board) {
      if (row[c] !== start) {
        break;
      }
      count++;
    }

    if (count === 3) return true;
  }

  let start = board[0][0];
  let count = 0;

  if (start === player) {
    for (let i = 0; i < R; i++) {
      if (board[i][i] !== start) {
        break;
      }
      count++;
    }

    if (count === 3) return true;
  }

  start = board[0][C - 1];
  count = 0;

  if (start === player) {
    for (let i = 0; i < R; i++) {
      if (board[i][R - 1 - i] !== start) {
        break;
      }
      count++;
    }

    if (count === 3) return true;
  }

  return false;
}

function solution(board) {
  let [countO, countX] = [0, 0];

  for (let row of board) {
    for (let col of row) {
      if (col === 'O') {
        countO++;
      } else if (col === 'X') {
        countX++;
      }
    }
  }

  const diff = countO - countX;

  if (diff < 0 || diff > 1) return 0;
  else {
    if (diff === 0 && checkWin(board, 'O')) return 0;
    if (diff === 1 && checkWin(board, 'X')) return 0;
  }

  return 1;
}
