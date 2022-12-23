const booleanToWord = (boolean) => (boolean === true ? "Yes" : "No");

/* const booleanToWord = (boolean) => {
  if (boolean === true) {
    return "Yes";
  }
  if (boolean === false) {
    return "No";
  }
  return "not a boolean";
}; */

// quite a self explanatory code used if statements again as two different outcomes- Yes or No
// added a further return in case true or false is not entered- not sure if this is correct though as all values are either true of false

module.exports = booleanToWord;
