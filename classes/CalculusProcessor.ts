import { MathProcessor } from "./MathProcessor";
import { derivative, MathNode, parse } from "mathjs";

export class CalculusProcessor extends MathProcessor {
  private parsedExpression: MathNode;
  private parsedIndependentVariable: MathNode;

  public getDerivative(expression: string, independentVariable: string) {
    this.parsedExpression = parse(expression);
    this.parsedIndependentVariable = parse(independentVariable);
    return derivative(
      this.parsedExpression,
      this.parsedIndependentVariable
    ).toString();
  }
}
