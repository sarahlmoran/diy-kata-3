const humanCatDogYears = (number) => {
  const x = number - 3;
  //  created a const variable to minus 3 off the inputted number to make the equation work
  // used if statements as there are a number of potential outcomes

  if (number === 0) {
    return [number, number, number];
  }
  if (number === 1) {
    return [number, number + 14, number + 14];
  }

  if (number === 2) {
    return [number, number + 22, number + 22];
  }
  if (number >= 3) {
    return [number, 28 + 4 * x, 29 + 5 * x];
  }
};
// Not sure whether it is best practice to have if number >= 3 or an overarching return

module.exports = humanCatDogYears;
