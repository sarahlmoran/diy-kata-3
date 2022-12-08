const booleanToWord = (boolean) => {
  if (boolean === true) {
    return "Yes";
  }
  if (boolean === false) {
    return "No";
  }
  return "not a boolean";
};

module.exports = booleanToWord;
