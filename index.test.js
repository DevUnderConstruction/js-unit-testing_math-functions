import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("should add number 2 and 3 correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("should add number 2 and -3 correctly", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("should add number 0.1 and 0.2 correctly", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("should substract 2 of 5 correctly", () => {
  const result = subtract(5, 2);
  expect(result).toBe(3);
});
