function solution(topping) {
  const toppings = [new Set(), new Set()];
  const toppingCounts = Array(topping.length)
    .fill()
    .map(() => [0, 0]);

  for (let i = 0; i < topping.length; i++) {
    toppingCounts[topping.length - 1 - i][1] = toppings[1].size;
    toppings[0].add(topping[i]);
    toppings[1].add(topping[topping.length - 1 - i]);
    toppingCounts[i][0] = toppings[0].size;
  }

  return toppingCounts.filter(
    (toppingCount) => toppingCount[0] === toppingCount[1]
  ).length;
}
