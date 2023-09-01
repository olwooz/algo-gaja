function solution(food) {
  const answer = food.reduce((acc, curr, index) => {
    const arr = new Array(Math.floor(curr / 2)).fill(index);
    return [...acc, ...arr];
  }, []);
  return [...answer, 0, ...answer.reverse()].join("");
}
