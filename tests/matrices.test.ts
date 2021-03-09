import { MatricesProcessor } from "../classes/MatricesProcessor";
import { matrix } from "mathjs";

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

test("matrixMultiplication method throws error if inner dimensions do not match", () => {
  // 2x2 Matrix
  const matrix1: number[][] = [
    [2, 1],
    [4, 5],
  ];

  // 3x1 Matrix
  const matrix2: number[][] = [[2], [1], [3]];

  expect(() => {
    MP.matrixMultiplication(matrix1, matrix2);
  }).toThrow();
});

test("matrixMultiplication method returns the correct answer upon call", () => {
  const matrix1: number[][] = [
    [2, 1],
    [0, 5],
  ];

  const matrix2: number[][] = [
    [1, 4, 3],
    [2, 7, 1],
  ];

  const expected = matrix([
    [4, 15, 7],
    [10, 35, 5],
  ]);

  const result = MP.matrixMultiplication(matrix1, matrix2);

  expect(result.toString()).toBe(expected.toString());
});
