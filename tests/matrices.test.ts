import { MatricesProcessor } from "../classes/MatricesProcessor";

const MP = new MatricesProcessor();

test("getDeterminant method return correct determinant of inputted matrix", () => {
  const input: number[][] = [
    [5, 6],
    [7, -3],
  ];
  const input2: number[][] = [
    [4, 8],
    [2, 4],
  ];

  const result = MP.getDeterminant(input);
  const result2 = MP.getDeterminant(input2);

  expect(result).toBe(-57);
  expect(result2).toBe(0);
});
