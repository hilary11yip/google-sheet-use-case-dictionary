function createFrequencyMap(array) {
  return array.reduce((frequencyMap, item) => {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    return frequencyMap;
  }, {});
}
