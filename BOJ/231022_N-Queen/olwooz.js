function solution(N) {
  const colTaken = Array(N).fill(false);
  const diag1Taken = Array(2 * N - 1).fill(false);
  const diag2Taken = Array(2 * N - 1).fill(false);

  function backtrack(row) {
    if (row === N) return 1;

    let count = 0;

    for (let col = 0; col < N; col++) {
      if (
        !colTaken[col] &&
        !diag1Taken[row + col] &&
        !diag2Taken[N - 1 + row - col]
      ) {
        colTaken[col] = true;
        diag1Taken[row + col] = true;
        diag2Taken[N - 1 + row - col] = true;

        count += backtrack(row + 1);

        colTaken[col] = false;
        diag1Taken[row + col] = false;
        diag2Taken[N - 1 + row - col] = false;
      }
    }

    return count;
  }

  return backtrack(0);
}

const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

console.log(solution(N));
