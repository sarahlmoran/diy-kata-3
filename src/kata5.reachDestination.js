const reachDestination = (distance, speed) => {
  const time = distance / speed;

  return `I should be there in ${Math.round(time * 2) / 2} hours.`;
};

// created a const variable to divide distance by time
// I used Math.round to round the number up or down
// Math.round rounds to a whole number and this test is to round to nearest 0.5
// (time*2)/2 allows to round to 0.5 instead of whole
// I used a string literal `$ {}` instead of adding separate strings as it looks cleaner
// return "I should be there in " + Math.round(time * 2) / 2 + " hours.";
module.exports = reachDestination;
