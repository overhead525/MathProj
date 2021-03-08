import { MatricesProcessor } from "../classes/MatricesProcessor";

const MP = new MatricesProcessor();

test("getDeterminant method return correct determinant of inputted matrix", () => {
  const input: number[][] = [
    [5, 6],
    [7, -3],
  ];
  const result = MP.getDeterminant(input);
  expect(result).toBe(-57);
});
