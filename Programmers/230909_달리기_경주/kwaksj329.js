function solution(players, callings) {
  let rank = players.reduce((rank, player, index) => {
    rank[player] = index;
    return rank;
  }, {});
  for (let i = 0; i < callings.length; i++) {
    const player = callings[i];
    rank[player] -= 1;
    const loser = players[rank[player]];
    rank[loser] += 1;
    players[rank[player]] = player;
    players[rank[player] + 1] = loser;
  }

  return players;
}
