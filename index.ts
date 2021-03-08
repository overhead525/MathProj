import * as math from "mathjs";

function main() {
  const parsedExp = math.parse("f(x) = x^2 + x - 5");
  console.log(parsedExp.toString());
}

main();
