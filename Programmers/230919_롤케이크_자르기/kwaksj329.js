function solution(topping) {
  let answer = 0;
  let toppingSize = topping.length;
  let brother = new Map();
  const sister = new Set();
  topping.forEach((value) => {
    brother.has(value)
      ? brother.set(value, brother.get(value) + 1)
      : brother.set(value, 1);
  });
  for (let i = 0; i < toppingSize; i++) {
    const oneTopping = topping[i];
    sister.add(oneTopping);
    brother.set(oneTopping, brother.get(oneTopping) - 1);
    if (brother.get(oneTopping) === 0) {
      brother.delete(oneTopping);
    }
    if (brother.size === sister.size) {
      answer++;
    } else if (brother.size < sister.size) {
      break;
    }
  }
  return answer;
}
