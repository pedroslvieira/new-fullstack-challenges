const sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  let sumNegatives = 0;
  numbers.forEach((number) => {
    if (number <= 0) {
      sumNegatives += number;
    }
  });
  return sumNegatives;
};

// console.log(sumOfNegative([-1, 2]));

module.exports = sumOfNegative; // Do not remove.
