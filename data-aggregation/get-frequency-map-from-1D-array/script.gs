function createFrequencyMap(array) {
  return array.reduce((frequencyMap, item) => {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    return frequencyMap;
  }, {});
}

function frequencyMapToArray(frequencyMap) {
  return Object.entries(frequencyMap).map(([item, count]) => [item, count]);
}

function exportFrequencyMapToCSV(frequencyMap) {
  var csvData = frequencyMapToArray(frequencyMap);
  csvData.unshift(['Item', 'Count']); // Add header row
  var csvContent = csvData.map(row => row.join(',')).join('\n');
  var blob = Utilities.newBlob(csvContent, 'text/csv', 'frequency_map.csv');
  DriveApp.createFile(blob);
}

function getCsvFileData() {
  const fileIds = [id1, id2];
  var userIds = [];

  fileIds.forEach(fileId => {
    var file = DriveApp.getFileById(fileId);
    var csvContent = file.getBlob().getDataAsString();
    var csvData = Utilities.parseCsv(csvContent);

    csvData.forEach(row => {
      userIds.push(row[1]);
    });
  });
  var frequencyMap = createFrequencyMap(userIds);
  exportFrequencyMapToCSV(frequencyMap);
}
