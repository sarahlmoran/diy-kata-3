const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns an array of three numbers of human age, cat age and dog age when passed human age", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(9)).toEqual([9, 52, 59]);
    expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
  });

  it("returns an array of three numbers of human age, cat age and dog age when passed 0 as human age", () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
  });

  it("returns an array of three numbers of human age, cat age and dog age when passed 1 as human age", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  });

  it("returns an array of three numbers of human age, cat age and dog age when passed 2 as human age", () => {
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  });

  it("returns an array of three numbers of human age, cat age and dog age when passed 3 or over as human age", () => {
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
  });
});
