const numberToReversedDigits = (number) =>
  String(number).split("").reverse().map(Number);

// String(number) changes the number to a string - I had to make this a string as certain methods only work for certain data types
// result "12345"
// .split splits each element of the string so they are ready to be reversed
// result "1","2","3","4","5"
// .reverse reverses all the seperated string elements
// result "5","4","3","2","1"
// .map(Number) maps through each string to change it back to a number and returns this within an array
// result [5,4,3,2,1]

module.exports = numberToReversedDigits;
