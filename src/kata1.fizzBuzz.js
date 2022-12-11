const fizzBuzz = (number) => {
  const isDivisableBy3 = number % 3 === 0; // added variables as the divisible by 3 is used on two tests
  const isDivisableBy5 = number % 5 === 0; // added variables as the divisible by 5 is used on two tests

  // used if statements for this test

  if (isDivisableBy3 && isDivisableBy5) {
    return "FizzBuzz";
  }
  // the last test is at top- this is a good convention to continue
  if (isDivisableBy5) {
    return "Buzz";
  }
  if (isDivisableBy3) {
    return "Fizz";
  }
  return number;
};
// return number is at the bottom as if none of the other conditions are met it returns the number
// this is less code than writing a further if statement

module.exports = fizzBuzz;

