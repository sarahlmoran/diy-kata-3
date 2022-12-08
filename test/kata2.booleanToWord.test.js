const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns the word Yes when passed a true value", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("returns the word No when passed a false value", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
