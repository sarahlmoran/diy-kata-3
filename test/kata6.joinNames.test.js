const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toEqual("Bart, Lisa & Maggie");
    expect(
      joinNames([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Marge" },
        { name: "Millhouse" },
        { name: "Mr Burns" },
        { name: "Smithers" },
        { name: "Homer" },
      ])
    ).toEqual(
      "Bart, Lisa, Maggie, Marge, Millhouse, Mr Burns, Smithers & Homer"
    );
  });
});
