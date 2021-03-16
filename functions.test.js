const functions = require('./functions.js');



test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {
	expect(functions.checkValue(undefined)).toBeFalsy;
});

test('User should be Brad Traversy object', () => {
	expect(functions.createUser()).toMatchObject({
		firstName: 'Brad',
		lastName: 'Traversy'
	});
});

test('Should be under or equal to 1600', () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBe(1600);
});

// Regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/i/)
});

// Arrays
test('Admin should be in usernames', () => {
	usernames = ['john', 'karen', 'admin'];
	expect(usernames).toContain('admin')
	// expect(usernames).to......
});



const addOne = require("./add-one.js");

test("Add 1 to each item in myArray", function () {
	const myArray = [31, 57, 12, 5];

	const unchanged = [31, 57, 12, 5];
	const expected = [32, 58, 13, 6];
	const output = addOne(myArray);

	expect(output).toEqual(expected);
	expect(myArray).toEqual(unchanged);
});

const getWordLengths = require("./get-word-lengths.js");

test("Get word lengths", function() {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];

  const output = getWordLengths(words);
  expect(output).toEqual(expected);
});

const findNeedle = require("./find-needle.js");

test("Find the needle", function() {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = findNeedle(words, "needle");
  expect(output).toEqual(expected);
});