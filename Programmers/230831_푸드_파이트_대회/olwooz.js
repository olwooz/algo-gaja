function solution(food) {
  const arrangement = food.reduce((acc, cur, index) => {
    const foodCount = Math.floor(cur / 2);
    return [...acc, ...Array(foodCount).fill(index)];
  }, []);

  return [...arrangement, 0, ...arrangement.reverse()].join('');
}
