// Compiled using dontime 1.0.0 (TypeScript 4.7.4)
var calAgenda = function () {
  return boilerplate.calAgenda(SpreadsheetApp);
};

function calendar() {
  var events = boilerplate.loopValues(
    boilerplate.sliceValues(boilerplate.getValues(), 1),
  );
  for (var i = 0; i < events.length; i++) {
    var start = events[i][0];
    var end = events[i][0];
    var description = events[i][1];
    //console.log(boilerplate.getEventValues(start, end));
    return boilerplate.addEventToCalendar(start, end, description, start);
  }
}

var checkIt = function runIt(e) {
  // {
  // const openR = boilerplate.lockR(10, 1)
  // return openR
  const timeStamp = boilerplate.stampRow(e, 2, 1, 1);
  return timeStamp;
  // {
  //   const miles = boilerplate.endPoint("30135", "miles");
  //   console.log(miles)
  // }
  // }
};

function datasetFormatting() {
  return custom_bands.formatDataset();
}

function dateAgenda() {
  return boilerplate.dateAgenda();
}

var doGet = function (e) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("default", website);
  return Route["default"](e);
};

var runAll = function (func, args) {
  var arr = func.split(".");

  var libName = arr[0];
  var libFunc = arr[1];

  args = args || [];

  return this[libName][libFunc].apply(this, args);
};

function formattingMenu() {
  return custom_bands.onOpen();
}

function onEdit(e) {
  checkIt(e);
}

function onOpen() {
  formattingMenu();
  datasetFormatting();
  sidebarMenu();
}

function runItLog(e) {
  return boilerplate.runItLog();
}

var sidebarMenu = function onOpen() {
  const menu = boilerplate.onOpen(SpreadsheetApp);
  menu.createMenu("Agenda").addToUi();
};

var website = function site(e) {
  const webApp = boilerplate.doGet(e);
  return webApp;
};
