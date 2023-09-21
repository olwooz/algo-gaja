function solution(prices) {
  Array.prototype.top = function () {
    return this[this.length - 1];
  };

  const answer = Array(prices.length).fill();
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack.top()]) {
      answer[stack.top()] = i - stack.top();
      stack.pop();
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    answer[stack.top()] = prices.length - stack.top() - 1;
    stack.pop();
  }

  return answer;
}
console.log(solution([1, 2, 3, 2, 3]));

// return prices.map((price, index) => {
//   const droppedIndex = prices
//     .slice(index + 1)
//     .findIndex((nextPrice) => nextPrice < price);
//     return droppedIndex === -1 ? prices.length - index - 1 : droppedIndex + 1;
// });

// function solution(prices) {
//   Array.prototype.top = function () {
//     return this[this.length - 1];
//   };

//   const answer = Array(prices.length).fill();
//   const stack = [];

//   for (let i = 0; i < prices.length; i++) {
//     while (stack.length > 0 && prices[i] < prices[stack.top()]) {
//       answer[stack.top()] = i - stack.top();
//       stack.pop();
//     }
//     stack.push(i);
//   }

//   while (stack.length > 0) {
//     answer[stack.top()] = prices.length - stack.top() - 1;
//     stack.pop();
//   }

//   return answer;
// }
