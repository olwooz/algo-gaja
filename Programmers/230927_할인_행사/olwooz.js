function solution(want, number, discount) {
  let answer = 0;

  const shoppingList = Object.fromEntries(
    want.map((item, idx) => [item, number[idx]])
  );
  const discountCount = discount.slice(0, 10).reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  function isMatch() {
    let isMatch = true;

    for (const [item, count] of Object.entries(shoppingList)) {
      if (discountCount[item] === count) continue;

      isMatch = false;
      break;
    }

    return isMatch;
  }

  for (let i = 10; i < discount.length; i++) {
    if (isMatch()) answer++;

    const [prevItem, newItem] = [discount[i - 10], discount[i]];

    discountCount[prevItem]--;
    discountCount[newItem] = (discountCount[newItem] ?? 0) + 1;
  }

  if (isMatch()) answer++;

  return answer;
}
