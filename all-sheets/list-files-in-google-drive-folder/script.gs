function listFolderFiles(folderId) {
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  var fileList = [];

  while (files.hasNext()) {
    var file = files.next();
    console.log(file.getName());
    fileList.push(file.getName());
  }
  return fileList;
}
