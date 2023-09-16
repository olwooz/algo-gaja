function solution(book_time) {
  function compareTime(time) {
    let [b_hour, b_minute] = time[0].split(":");
    let [a_hour, a_minute] = time[1].split(":");
    return [
      Number(b_hour) * 60 + Number(b_minute),
      Number(a_hour) * 60 + Number(a_minute) + 10,
    ];
  }
  const newBooks = [];
  for (let i = 0; i < book_time.length; i++) {
    newBooks.push(compareTime(book_time[i]));
  }
  newBooks.sort((a, b) => a[0] - b[0]);
  let rooms = [newBooks[0]];

  for (let i = 1; i < newBooks.length; i++) {
    let changed = false;
    for (let j = 0; j < rooms.length; j++) {
      if (rooms[j][1] <= newBooks[i][0]) {
        rooms.splice(j, 1, newBooks[i]);
        changed = true;
        break;
      }
    }
    if (!changed) {
      rooms.push(newBooks[i]);
    }
  }
  return rooms.length;
}
