function solution(players, callings) {
  const leaderboard = players.reduce(
    (leaderboard, player, index) => ({ ...leaderboard, [player]: index }),
    {}
  );

  callings.forEach((calling) => {
    const currentIndex = leaderboard[calling];
    [players[currentIndex], players[currentIndex - 1]] = [
      players[currentIndex - 1],
      players[currentIndex],
    ];
    leaderboard[calling]--;
    leaderboard[players[currentIndex]]++;
  });

  return players;
}
