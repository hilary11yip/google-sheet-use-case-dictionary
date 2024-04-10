function borders() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  range.setBorder(false, false, false, false, false, false);
  
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      if (values[i][j] !== "") {
        range.getCell(i + 1, j + 1).setBorder(true, true, true, true, true, true);
      }
    }
  }
}
