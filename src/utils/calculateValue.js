// To get over the floating point issue, i round all nums to whole numbers until the calculation is complete.
// With mutliplication or division, all that would need doing is revisiting the decimal places length
export default function calculateValue (operator, first, second) {
  let decimalSubstr = 0;
  if (String(first).includes(".") || String(second).includes(".")) {
    const firstSubstr = String(first).split(".")[1];
    const secondSubstr = String(second).split(".")[1];

    const firstLength = (!!firstSubstr && firstSubstr.length) || 0;
    const secondLength = (!!secondSubstr && secondSubstr.length) || 0;
    decimalSubstr = firstLength > secondLength ? firstLength : secondLength;
  }
  const roundInt = Number(`1${"0".repeat(decimalSubstr)}`);

  switch(operator) {
    case "+":
      return ((first * roundInt) + (second * roundInt)) / roundInt;
    case "-":
      return ((first * roundInt) - (second * roundInt)) / roundInt;
    case "=":
      return second;
    default:
      return new Error('invalid operation');
  }
}