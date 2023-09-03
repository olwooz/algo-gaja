function solution(survey, choices) {
  let answer = "";
  const itemDict = { A: 0, C: 0, F: 0, J: 0, M: 0, N: 0, R: 0, T: 0 };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      itemDict[survey[i][0]] += 4 - choices[i];
    } else if (choices[i] > 4) {
      itemDict[survey[i][1]] += choices[i] - 4;
    }
  }
  const arr = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  for (let i = 0; i < arr.length; i++) {
    if (itemDict[arr[i][0]] > itemDict[arr[i][1]]) {
      answer += arr[i][0];
    } else if (itemDict[arr[i][0]] < itemDict[arr[i][1]]) {
      answer += arr[i][1];
    } else {
      answer += arr[i][0];
    }
  }
  return answer;
}
