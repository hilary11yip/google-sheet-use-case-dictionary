// After setting the script, make sure you've added a time-based trigger to untick all items every day

function untickEveryThing(){
  var sheetName = ['Sheet1', 'Sheet2'];

  var startRow = 4;

  for(var i = 0; i < sheetName.length; i++){
      var range = SpreadsheetApp.getActive().getSheetByName(sheetName[i]);
      var lastrow = lastRowForColumn(range, 1);

      for(var j = startRow ; j <= lastrow; j++){
        range.getRange(j, 1).setValue(false);}

    }
}
