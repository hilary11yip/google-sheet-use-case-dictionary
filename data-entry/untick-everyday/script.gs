// After setting the script, make sure you've added a time-based trigger to untick all items every day

function doUntickEveryCell(){
  var sheetName = 'Sheet1';
  var startRow = 4;
  var range = SpreadsheetApp.getActive().getSheetByName(sheetName[i]);
  var lastrow = lastRowForColumn(range, 1);

  for(var j = startRow ; j <= lastrow; j++){
      range.getRange(j, 1).setValue(false);}
  }
}
