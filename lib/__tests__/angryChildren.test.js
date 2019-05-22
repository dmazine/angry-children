const maxMin = require("../index.js");

describe("angryChildren", () => {
  it("test case 1", () => {
    const k = 3;
    const arr = [10, 100, 300, 200, 1000, 20, 30];

    expect(maxMin(k, arr)).toBe(20);
  });

  it("test case 2", () => {
    const k = 4;
    const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];

    expect(maxMin(k, arr)).toBe(3);
  });

  it("test case 3", () => {
    const k = 2;
    const arr = [1, 2, 1, 2, 1];

    expect(maxMin(k, arr)).toBe(0);
  });
});
