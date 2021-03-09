import { MathProcessor } from "./MathProcessor";
import { Matrix, det, matrix, multiply, size } from "mathjs";

export class MatricesProcessor extends MathProcessor {
  private parsedMatrix: Matrix;

  public getDeterminant(matrixExpresssion: number[][]): number {
    this.parsedMatrix = matrix(matrixExpresssion);
    return det(this.parsedMatrix);
  }

  public matrixMultiplication(
    matrix1: number[][],
    matrix2: number[][]
  ): number[][] {
    const size1 = size(matrix1);
    const size2 = size(matrix2);

    if (size1[1] !== size2[0]) {
      throw new Error("Inner dimensions do not match");
    }

    const parsedMatrix1 = matrix(matrix1);
    const parsedMatrix2 = matrix(matrix2);

    return multiply(parsedMatrix1, parsedMatrix2).toArray() as number[][];
  }
}
