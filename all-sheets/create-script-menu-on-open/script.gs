function onOpen() {
 var menu = [
   {name: [function display name], functionName: [function name in Apps Script]},
   {name: [function display name], functionName: [function name in Apps Script]}
 ];
 SpreadsheetApp.getActiveSpreadsheet().addMenu([menu name in Google Sheet], menu);
}
