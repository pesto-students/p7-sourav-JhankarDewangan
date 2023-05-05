const { sum, mul, diff, div } = require("./index");

test("2+4 =6", () => {
  expect(sum(2, 4)).toBe(6);
});


test("3 * 7 = 21", () => {
  expect(mul(3, 7)).toBe(21);
});

test("5 - 7 = -2", () => {
  expect(diff(5, 7)).toBe(-2);
});

test("8 / 2 = 4", () => {
  expect(div(8, 2)).toBe(4);
});