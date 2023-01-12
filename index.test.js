'use strict';

const index = require('./cli');


test('convert 32 degrees fahrenheit to 0 degrees celsius', () => {
	expect(32).toBe(0);
});

test('convert 0 degrees celsius to 32 degrees fahrenheit', () => {
	expect(0).toBe(32);
});
