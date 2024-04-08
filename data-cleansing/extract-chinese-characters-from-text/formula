function extractChineseCharacters(range) {
  var output = [];
  var values = SpreadsheetApp.getActiveSheet().getRange(range).getValues();

  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    var extracted = [];
    
    for (var j = 0; j < row.length; j++) {
      var cellValue = row[j];
      
      if (typeof cellValue === 'string') {
        var chineseCharacters = cellValue.match(/[\u4e00-\u9fff]+/g);
        
        if (chineseCharacters) {
          extracted.push(chineseCharacters.join(''));
        } else {
          extracted.push('');
        }
      } else {
        extracted.push('');
      }
    }
    
    output.push(extracted);
  }

  return output;
}
