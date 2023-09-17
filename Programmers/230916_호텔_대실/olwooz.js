const CLEANING_TIME = 10;
const MIN_IN_DAY = 24 * 60 + CLEANING_TIME;

function timeToMin(time) {
  const [hour, min] = time.split(':').map(Number);
  return hour * 60 + min;
}

function solution(book_time) {
  const bookTimeMin = book_time.map((time) => [
    timeToMin(time[0]),
    timeToMin(time[1]) + CLEANING_TIME,
  ]);
  const roomCount = Array(MIN_IN_DAY).fill(0);

  bookTimeMin.forEach((time) => {
    roomCount[time[0]]++;
    roomCount[time[1]]--;
  });

  for (let i = 1; i < MIN_IN_DAY; i++) {
    roomCount[i] += roomCount[i - 1];
  }

  return Math.max(...roomCount);
}
