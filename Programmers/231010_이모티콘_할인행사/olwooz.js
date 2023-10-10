const DISCOUNT_RATES = [10, 20, 30, 40];

function getDiscountRatePermutation(m) {
  return Array(m)
    .fill()
    .map((a) => DISCOUNT_RATES)
    .reduce(
      (acc, cur) => {
        let newAcc = [];

        acc.forEach((arr) => {
          cur.forEach((rate) => {
            newAcc.push([...arr, rate]);
          });
        });

        return newAcc;
      },
      [[]]
    );
}

function getMembersCountRevenuePair(users, emoticons, rates) {
  let membersCount = 0;
  let revenue = 0;

  users.forEach((user) => {
    const [minRate, maxPrice] = user;
    let price = 0;
    let hasJoinedMember = false;

    for (let i = 0; i < emoticons.length; i++) {
      if (minRate <= rates[i]) price += (emoticons[i] * (100 - rates[i])) / 100;
      if (maxPrice <= price) {
        hasJoinedMember = true;
        break;
      }
    }

    if (hasJoinedMember) membersCount++;
    else revenue += price;
  });

  return [membersCount, revenue];
}

function solution(users, emoticons) {
  return getDiscountRatePermutation(emoticons.length).reduce(
    (acc, rates) => {
      const [membersCount, revenue] = getMembersCountRevenuePair(
        users,
        emoticons,
        rates
      );

      if (acc[0] > membersCount) return acc;
      if (acc[0] < membersCount) return [membersCount, revenue];
      return acc[1] > revenue ? acc : [membersCount, revenue];
    },
    [0, 0]
  );
}
