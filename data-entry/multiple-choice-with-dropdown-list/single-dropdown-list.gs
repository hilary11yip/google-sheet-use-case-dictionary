/* can change name of function "onEdit(e)"
but make sure on edit trigger is set for the function
*/
const dropdownListRow = [integer value];
const dropdownListCol = [integer value];
const allSelectedValuesRow = [integer value];
const allSelectedValuesCol = [integer value];
const desiredSheetName = [string value];

function onEdit(e) {
  var range = e.range;
  var col = range.getColumn();
  var row = range.getRow();
  var sheetName = SpreadsheetApp.getActiveSheet().getName();
  var fromDesiredSheet = (sheetName.indexOf(desiredSheetName) != -1);
  var isPicker = ((row == dropdownListRow) && (col == dropdownListCol));

  if (fromDesiredSheet && isPicker) {
      var newItem = sheet.getRange(dropdownListRow, dropdownListCol).getValue();
      var allSelectedValues = sheet.getRange(allSelectedValuesRow, allSelectedValuesCol).getValue();

      updateSelectedValues(newItem, allSelectedValues, sheet, allSelectedValuesRow, allSelectedValuesCol);
    }

}


function addNewChoice(newItem, allSelectedValues) {
  var result = "";

  if (allSelectedValues.length == 0) {
    result = newItem;
  }
  else {
    result = allSelectedValues + ';' + newItem;
  }

  return result;
}

function updateSelectedValues(newItem, allSelectedValues, sheet, row, col) {
  var updatedSelectedValues = addNewChoice(newItem, allSelectedValues);

  sheet.getRange(row, col).setValue(updatedSelectedValues);
}
