var EVENT = new Date(Date.UTC(2018, 10, 23, 8, 30, 0));

var SECONDS_IN_MINUTE = 60;
var SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
var SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;
var SECONDS_IN_WEEK = SECONDS_IN_DAY * 7;

function startLoop() {
	setInterval(calculateAll, 1000);
}

function set(id, value, unitSingular, unitPlural) {
	var unit = value == 1 ? unitSingular : unitPlural;
	var text = '<h1>' + value + ' ' + unit + '<h1>';
	document.getElementById(id).innerHTML = text;
}

function calculateAll() {
	var secondsDelta = Math.round((EVENT.getTime() - Date.now()) / 1000);

	var weeksLeft = Math.floor(secondsDelta / SECONDS_IN_WEEK);
	var secondsWithoutWeeks = secondsDelta - weeksLeft * SECONDS_IN_WEEK;
	var daysLeft = Math.floor(secondsWithoutWeeks / SECONDS_IN_DAY);
	var secondsWithoutDays = secondsWithoutWeeks - daysLeft * SECONDS_IN_DAY;
	var hoursLeft = Math.floor(secondsWithoutDays / SECONDS_IN_HOUR);
	var secondsWithoutHours = secondsWithoutDays - hoursLeft * SECONDS_IN_HOUR;
	var minutesLeft = Math.floor(secondsWithoutHours / SECONDS_IN_MINUTE);
	var secondsLeft = secondsWithoutHours - minutesLeft * SECONDS_IN_MINUTE;
	
	set('seconds', secondsLeft, 'second', 'seconds');
	set('minutes', minutesLeft, 'minute', 'minutes');
	set('hours', hoursLeft, 'hour', 'hours');
	set('days', daysLeft, 'day', 'days');
	set('weeks', weeksLeft, 'week', 'weeks');
}
