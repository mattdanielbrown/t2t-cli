"use strict";

const t2t = require('t2t');

const convertTemperature = (scale, temperature) => {
	let result;
	if (scale === "c") {
		result = t2t.fahrenheit(temperature);
	} else {
		result = t2t.celsius(temperature);
	}
	return result;
};

module.exports = { convertTemperature };
