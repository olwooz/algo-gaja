function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliveryCap = 0;
  let pickupCap = 0;

  const _deliveries = [0, ...deliveries];
  const _pickups = [0, ...pickups];

  for (let i = n; i > 0; i--) {
    let count = 0;

    deliveryCap -= _deliveries[i];
    pickupCap -= _pickups[i];

    while (deliveryCap < 0 || pickupCap < 0) {
      deliveryCap += cap;
      pickupCap += cap;
      count++;
    }

    answer += count * i * 2;
  }

  return answer;
}
