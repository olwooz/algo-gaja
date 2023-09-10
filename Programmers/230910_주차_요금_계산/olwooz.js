function solution(fees, records) {
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const parkingRecords = {};
  const cumulativeParkingTime = {};

  function addToParkingTime(id, time) {
    const totalParkingTime = time - parkingRecords[id];

    if (cumulativeParkingTime[id]) {
      cumulativeParkingTime[id] += totalParkingTime;
    } else {
      cumulativeParkingTime[id] = totalParkingTime;
    }

    delete parkingRecords[id];
  }

  records.forEach((record) => {
    const [time, id, detail] = record.split(' ');
    const timeInMinutes = convertTimeToMinutes(time);

    if (detail === 'IN') {
      parkingRecords[id] = timeInMinutes;
    } else {
      addToParkingTime(id, timeInMinutes);
    }
  });

  Object.keys(parkingRecords).forEach((id) => {
    const timeInMinutes = convertTimeToMinutes('23:59');
    addToParkingTime(id, timeInMinutes);
  });

  const sortedId = Object.keys(cumulativeParkingTime);
  sortedId.sort();

  return sortedId.map((id) =>
    calculateFee(
      cumulativeParkingTime[id],
      baseTime,
      baseFee,
      unitTime,
      unitFee
    )
  );
}

function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(':');

  return Number(hours) * 60 + Number(minutes);
}

function calculateFee(time, baseTime, baseFee, unitTime, unitFee) {
  if (time <= baseTime) return baseFee;

  return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
}
