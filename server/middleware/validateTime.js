//date,
//start-time

exports.validateTime = (date, start_time) => {
	/* 
	  verify it is the correct day of the event.
	  Assumption is made that the date in the event model
	  is stored in the format new Date("2020-08-1 0:00:00");

	  start time: new Date("2020-08-1 21:20:00"); => hours
	  start time: new Date("2020-08-1 21:20:03"); => minutes

	*/
	const currentDay = new Date();
	const currentHour = new Date().getHours();
	const currentMinutes = new Date().getMinutes();
	const minutesToStart = start_time.getMinutes();

	const minuteDiff = minutesToStart - currentMinutes;
	//event day has not arrived
	if (date > currentDay) {
		return false;
	}

	//not @least 1hr before event start
	if (start_time !== currentHour - 1) {
		return false;
	}

	//time before event start greater than 1hr
	if (minuteDiff <= 0 && minuteDiff >= 60) {
		return false;
	}

	return true;
};
