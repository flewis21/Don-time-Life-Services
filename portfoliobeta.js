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
  var foobarr = e.parameter["func"] || "renderFile";
  var libName = "boilerplate";
  var libFunc = foobarr;
  var rndPage = [
    `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
  ]
    .toString()
    .split(" ")[
    Math.floor(
      Math.random() *
        Math.floor(
          [
            `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
          ]
            .toString()
            .split(" ").length,
        ),
    )
  ];
  args = e.parameter["args"] || ["jFundamentals"];
  return renderTemplate(
    this[libName].contentApp(
      `
      <html id="doGet">
        <head>
          <base target="_self">
          <meta charset="utf-8">
          <meta name="doGet" content="Company get Function">
          <meta name=viewport content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
          <style>

              body {

                flex-grow: 1;
                color:blue;
                text-decoration:bold;
                flex-flow: row wrap;
                grid-column: 1;
                grid-row: 1;
                text-align: center;
                align-content: flex-start;
                overflow: auto;
              }
          </style
        </head>
        <body>
          <div id="coApp">
            <?!= appL ?>
          </div>
          <div class="row">
            <div class="col s7 l7 m7 card-panel push-m2 push-s2 push-l2">
              <div class="video-container"> 
                  <iframe 
                    src=""
                    id="indexBeta"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    allow="encrypted-media"
                    title="Dontime Life Website"
                    frameborder="0"
                    allowfullscreen
                    ></iframe>
              </div>
            </div>
          </div>
          <script>
            console.log(<?!= appL.length ?>)
            if (<?!= appL.length === 99 ?>) {
              document.getElementById("coApp").innerHTML = ""
              document.getElementById("indexBeta").src = <?= appL ?>}
            else {document.getElementById("indexBeta").src = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"}
          </script>
        </body>
      </html>`,
      {
        appL: this[libName][
          foobarr ||
            HtmlService.createHtmlOutput(
              `
      <html id="doGet">
        <head>
          <base target="_self">
          <meta charset="utf-8">
          <meta name="doGet" content="Company get Function">
          <meta name=viewport content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
        </head>
        <body>
          <script>
                document.getElementById("appList").value
          </script>
        </body>
      </html>
              `,
            ).getContent()
        ].apply(this, [
          args ||
            HtmlService.createHtmlOutput(
              `
              
      <html id="doGet">
        <head>
          <base target="_self">
          <meta charset="utf-8">
          <meta name="doGet" content="Company get Function">
          <meta name=viewport content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
        </head>
        <body>
          <script>
                document.getElementById("username").value
          </script>
        </body>
      </html>
              `,
            ).getContent(),
        ]),
      },
    ),
    { e: e },
  );
};

var runBoilerplate = function (func, args) {
  var libName = "boilerplate";
  var libFunc = func || "doGet";
  args = args || [];
  return this[libName][libFunc].apply(this, args);
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
  const webApp = boilerplate.proMediaSnip(e);
  return webApp;
};
