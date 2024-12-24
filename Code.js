var SPREADSHEET_ID = '1rIxe5eG6FI4csfdiFoyJnCqDCXvXmyF7lVZ7VeO14mA'; // Your Spreadsheet ID

function getMessages() {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Sheet1');
  if (!sheet) throw new Error("Sheet 'Sheet1' not found!");

  var data = sheet.getDataRange().getValues();
  return data.slice(-50); // Return the last 50 messages
}

function saveMessage(messageData) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Sheet1');
  if (!sheet) throw new Error("Sheet 'Sheet1' not found!");

  sheet.appendRow(messageData); // Append message and timestamp
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Anonymous Chats')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
