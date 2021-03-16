const getWordLengths = function (someWords) {
	const wordsLengthArray = [];
	someWords.forEach(word => {
		wordsLengthArray.push(word.length);
	})
	return wordsLengthArray;
};

module.exports = getWordLengths;
