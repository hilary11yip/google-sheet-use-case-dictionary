const recordPICCol = (integer);
const recordDateCol = (integer);

function onEdit(e) {
  //Actions to be done when a cell is edited

  var range = e.range;
  var spreadSheet = e.source;
  var sheetName = spreadSheet.getActiveSheet().getName();
  var column = range.getColumn();
  var row = range.getRow();
  var inputValue = e.value;
  var needRecordUserName = (condition);

  if(needRecordUserName){
    addEditDateAndPIC(sheetName, row, recordDateCol, row, recordPICCol);
  } 
}

function addEditDateAndPIC(sheetName, row_date, column_date, row_PIC, column_PIC) {
    var date = [new Date()];
    var user = Session.getActiveUser().getEmail();
    var PIC = user.substring(0, user.indexOf("@"));
    var range_start= SpreadsheetApp.getActive().getSheetByName(sheetName);
    
    range_start.getRange(row_date, column_date).setValue(date);
    range_start.getRange(row_PIC, column_PIC).setValue(PIC);
}
