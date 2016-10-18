var $ = require('jquery');

// global variables needed across various functions
var engageButton = $("#start-button");
var subtractTime = $(".subtract-time");
var addTime = $(".add-time");
var resetButton = $("#reset-button");
var loopingTimer;

// event listeners which allow the user to start and reset the pomodoro clock
engageButton.on("click", startCountDown);
resetButton.on("click", resetTimer);

// event listeners which allow the user to change the break and work session times
subtractTime.on("click", changeSessionValues);
addTime.on("click", changeSessionValues);

var changeSessionValues = require('./modules/changeTimers');
var pauseCountDown = require('./modules/pauseTimer');
var resetTimer = require('./modules/resetTimer');
var startCountDown = require('./modules/timerCountDown');
var timerChange = require('./modules/timerCountDownChange');
