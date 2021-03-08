import { CalculusProcessor } from "../classes/CalculusProcessor";

const CP = new CalculusProcessor();

test("derivative of x^2 should be 2x", () => {
  const expression = "x^2";
  const independentVar = "x";
  const result = CP.getDerivative(expression, independentVar);
  const strippedResult = result
    .split("")
    .filter((char) => {
      return char != " ";
    })
    .join("");
  expect(strippedResult).toBe("2*x");
});
