const getProduct = (arr, num) => {
  const results = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const combinations = getProduct(arr, num - 1);
    const attached = combinations.map((v) => [fixed, ...v]);
    results.push(...attached);
  });
  return results;
};

function solution(users, emoticons) {
  const answer = [];
  const sales = [10, 20, 30, 40];
  const salePercents = getProduct(sales, emoticons.length);

  salePercents.forEach((sale) => {
    const result = [0, 0];
    users.forEach((user) => {
      let price = 0;
      sale.forEach((value, idx) => {
        if (value >= user[0]) price += (emoticons[idx] * (100 - value)) / 100;
      });
      price >= user[1] ? (result[0] += 1) : (result[1] += price);
    });
    answer.push(result);
  });

  return answer.sort((a, b) => b[1] - a[1]).sort((a, b) => b[0] - a[0])[0];
}
