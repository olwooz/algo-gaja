function solution(id_list, report, k) {
  let answer = [];
  let newReport = [...new Set(report)];
  let emailNum = id_list.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});
  let reportNum = id_list.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});
  newReport.forEach((value) => {
    reportNum[value.split(" ")[1]]++;
  });
  Object.keys(reportNum).forEach((value) => {
    if (reportNum[value] < k) delete reportNum[value];
  });
  newReport.forEach((value) => {
    if (reportNum[value.split(" ")[1]]) emailNum[value.split(" ")[0]]++;
  });
  Object.keys(emailNum).forEach((value) => answer.push(emailNum[value]));
  return answer;
}
