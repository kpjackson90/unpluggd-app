exports.validateTime = (date, start_time) => {
	const currentDay = new Date().getDate();
	const currentMonth = new Date().getMonth();
	const currentYear = new Date().getFullYear();
	const eventDay = date.getDate();
	const eventMonth = date.getMonth();
	const eventYear = date.getFullYear();

	const currentHour = new Date().getHours();
	const currentMinutes = new Date().getMinutes();
	const minutesToStart = new Date(start_time).getMinutes();
	const eventHour = new Date(start_time).getHours();

	const minuteDiff = minutesToStart - currentMinutes;

	//not day of event.
	if (currentYear !== eventYear && currentMonth !== eventMonth && currentDay !== eventDay) {
		return false;
	}

	//not @least 1hr before event start
	if (eventHour - currentHour > 1 || eventHour - currentHour < 0) {
		return false;
	}

	//time before event start greater than 1hr..
	if (minuteDiff <= 0 && minuteDiff >= 60) {
		return false;
	}

	return true;
};
