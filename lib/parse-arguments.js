"use strict";

function parseArguments(input) {
	let parsedInputs = {};
	const lowercasedInput = input.toLowerCase();
	const removedSpaces = lowercasedInput.split(" ").join("");
	const containsC = removedSpaces.includes('c');
	const containsF = removedSpaces.includes('f');
	
	// const regex = ('[0 - 9]{1,}[c, f]'.test(lowercasedInput));
	// const containsCorrect = /[0-9]/.test(lowercasedInput);
	
	
	// const regex = /(?P<amount>-?\d+(?:\.\d*)?)[^\S\n]*(?P<degrees>°|deg(?:rees?)?|in)?[^\S\n]*(?P<unit>c(?:(?=el[cs]ius\b|entigrades?\b|\b))|f(?:(?=ahrenheit\b|\b))|k(?:(?=elvins?\b|\b)))/gi;

	// Alternative syntax using RegExp constructor
	// const regex = new RegExp('(?P<amount>-?\\d+(?:\\.\\d*)?)[^\\S\\n]*(?P<degrees>°|deg(?:rees?)?|in)?[^\\S\\n]*(?P<unit>c(?:(?=el[cs]ius\\b|entigrades?\\b|\\b))|f(?:(?=ahrenheit\\b|\\b))|k(?:(?=elvins?\\b|\\b)))', 'gi')
	
	if (containsC !== true && containsF !== true) {
	
	} else {
		
		if (containsC === true) {
			let splitString = removedSpaces.split("c");
			parsedInputs = {
				"temperature": splitString[0],
				"scale": "c"
			}
		} else if (containsF === true) {
			let splitString = removedSpaces.split("f");
			parsedInputs = {
				"temperature": splitString[0],
				"scale": "f"
			}
		}
	}
	return parsedInputs;
}

module.exports = { parseArguments };
