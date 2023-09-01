function solution(food) {
  let original = [];
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      original.push(i);
    }
  }
  let reverse = [...original].reverse();
  let arr = original.concat(0, [...reverse]);
  let answer = arr.join("");
  return answer;
}
