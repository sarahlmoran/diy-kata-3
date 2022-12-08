const booleanToWord = (boolean) => {
  if (boolean === false) {
    return "No";
  }
  return "Yes";
};

module.exports = booleanToWord;
