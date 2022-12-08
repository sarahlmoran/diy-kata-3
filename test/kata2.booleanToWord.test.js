const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns the word Yes when passed a true value", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("returns the word No when passed a false value", () => {
    expect(booleanToWord(false)).toBe("No");
  });

  it("returns not a boolean when passed a non boolean value", () => {
    expect(booleanToWord(1)).toBe("not a boolean");
    expect(booleanToWord("Yes")).toBe("not a boolean");
    expect(booleanToWord("No")).toBe("not a boolean");
  });
});
