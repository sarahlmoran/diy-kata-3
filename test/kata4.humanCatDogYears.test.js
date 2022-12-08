const { humanCatDogYears } = require("../src");

  describe("humanCatDogYears", () => {
    it ("returns an array of three numbers of human age, cat age and dog age when passed human age", () => {
        expect(humanCatDogYears(10)).toEqual([10,56,64]);
    });
   
    });