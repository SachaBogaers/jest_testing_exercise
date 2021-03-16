const addOne = function (numbers) {
	const newArray = []
	numbers.forEach(item => newArray.push(item + 1));
	return newArray;
}

module.exports = addOne;

