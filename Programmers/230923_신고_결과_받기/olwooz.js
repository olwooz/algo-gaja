function solution(ids, reports, k) {
  const dedupedReports = [...new Set(reports)];
  const reportedCount = Object.fromEntries(ids.map((id) => [id, 0]));
  const mailCount = { ...reportedCount };
  const reportRecord = Object.fromEntries(ids.map((id) => [id, new Set()]));

  dedupedReports.forEach((report) => {
    const [reporter, reported] = report.split(' ');

    reportRecord[reported].add(reporter);
    reportedCount[reported]++;
  });

  for (const [key, value] of Object.entries(reportedCount)) {
    if (value >= k) {
      reportRecord[key].forEach((reporter) => mailCount[reporter]++);
    }
  }

  return Object.values(mailCount);
}
