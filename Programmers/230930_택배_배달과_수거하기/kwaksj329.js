function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let give = 0;
  let get = 0;

  for (let i = n - 1; i > -1; i--) {
    if (deliveries[i] > 0 || pickups[i] > 0) {
      let roundtripNum = 0;
      while (give < deliveries[i] || get < pickups[i]) {
        give += cap;
        get += cap;
        roundtripNum++;
      }

      give -= deliveries[i];
      get -= pickups[i];
      answer += (i + 1) * roundtripNum * 2;
    }
  }

  return answer;
}
