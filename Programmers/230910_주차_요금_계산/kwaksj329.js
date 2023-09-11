function calTime(before, after) {
  let result_h = Number(after.split(":")[0]) - Number(before.split(":")[0]);
  let result_m = Number(after.split(":")[1]) - Number(before.split(":")[1]);
  if (result_m < 0) {
    result_h -= 1;
    result_m += 60;
  }
  return result_h * 60 + result_m;
}

function calFee(fees, m) {
  if (m <= fees[0]) {
    return fees[1];
  } else {
    return fees[1] + Math.ceil((m - fees[0]) / fees[2]) * fees[3];
  }
}

function solution(fees, records) {
  let answer = [];
  let carRecord = records.reduce((acc, curr) => {
    let record = curr.split(" ");
    if (record[1] in acc) {
      if (record[2] === "OUT") {
        // record[0] - last time 하고 sum 에 더해주기
        acc[record[1]][2] += calTime(acc[record[1]][1], record[0]);
        acc[record[1]][0] = record[2];
      } else {
        acc[record[1]][0] = record[2];
        acc[record[1]][1] = record[0];
      }
    } else {
      acc[record[1]] = [record[2], record[0], 0]; //in or out, last time, sum
    }
    return acc;
  }, {});
  const ordered = Object.keys(carRecord)
    .sort()
    .reduce((obj, key) => {
      obj.set(key, carRecord[key]);
      return obj;
    }, new Map());
  for (let item of ordered) {
    console.log(item);
    if (item[1][0] === "OUT") {
      answer.push(calFee(fees, item[1][2]));
    } else {
      answer.push(calFee(fees, item[1][2] + calTime(item[1][1], "23:59")));
    }
  }

  return answer;
}
