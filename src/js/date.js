let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"Septmber",
		"October",
		"November",
		"December",
	],
	days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	],
	// EDIT TIME HERE IF YOU WISH TO UPDATE TIME OF THE COMMENTS, PLEASE BE CAREFULL TO LEAVE EXACT SAME STRUCTURE (EDIT BETWEEN "")
	time = [
		"12:01 am",
		"2:24 pm",
		"11:55 am",
		"8:47 am",
		"6:16 pm",
		"4:16 pm",
		"6:48 pm",
		"17:07",
	],
	d = new Date(),
	dateNow = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

if (window.location.search.match(/(\?|&)c1\=([^&]*)/) !== null) {
	let c1 = decodeURIComponent(
		window.location.search.match(/(\?|&)c1\=([^&]*)/)[2]
	).replace(/(\+|%20)/g, " ");
	document.title = "Survey Rewards";
}
