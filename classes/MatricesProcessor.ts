import { MathProcessor } from "./MathProcessor";
import { Matrix, det, matrix } from "mathjs";

export class MatricesProcessor extends MathProcessor {
  private parsedMatrix: Matrix;

  public getDeterminant(matrixExpresssion: number[][]): number {
    this.parsedMatrix = matrix(matrixExpresssion);
    return det(this.parsedMatrix);
  }
}
