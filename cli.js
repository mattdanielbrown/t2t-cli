#!/usr/bin/env node
"use strict";

const {Command} = require('commander');
const {convertTemperature} = require('./lib/convert-temperature');
const {parseArguments} = require('./lib/parse-arguments');
const program = new Command();

program
		.name('t2t')
		.description('CLI for converting temperatures between celsius and fahrenheit.')
		.version('1.1.3')
		.arguments('<temperatureAndScale>')
		.option('-n, --no-scale', 'omit trailing letter indicating temperature scale from result')
		.option('-d, --degree', 'include degree symbol in the result')
		.action((temperatureAndScale) => {
			
			
			let finalResult = '';
			let degreeOrNotString = '';
			let scaleOrNotString = '';
			
			const options = program.opts();
			
			const parsedInputs           = parseArguments(temperatureAndScale);
			const parsedInputScale       = parsedInputs.scale;
			const parsedInputTemperature = parsedInputs.temperature;
			
			const convertedTemperature   = convertTemperature(
					parsedInputScale,
					parsedInputTemperature
			);
			
			const convertedScale = parsedInputs.scale === 'c' ? 'F' : 'C';
			
			degreeOrNotString = options.degree === true ? '°' : '';
			scaleOrNotString = options.scale === false ? '' : convertedScale;
			
			finalResult = `${convertedTemperature}${degreeOrNotString}${scaleOrNotString}`;
			
			console.log(finalResult);
			
		});

program.version('1.1.3', '-v, --version', 'output the current version');
program.parse();
