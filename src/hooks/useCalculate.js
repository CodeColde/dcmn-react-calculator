import { useCallback, useEffect, useState } from "react";
import calculateValue from '../utils/calculateValue';

// Could also have been put in a reducer
function useCalculate () {
  const [displayValue, setDisplayValue] = useState("0");
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [awaitingOperator, setAwaitingOperator] = useState(false);
  const [operator, setOperator] = useState("");

  const clearAll = useCallback(() => {
    setDisplayValue("0");
    setCalculatedValue(null);
    setAwaitingOperator(false);
    setOperator("");
  }, [])

  const inputDigit = useCallback((digit) => {
    if (awaitingOperator) {
      setDisplayValue(String(digit));
      setAwaitingOperator(false);
      return;
    }
    const newVal = displayValue === "0" ? String(digit) : displayValue + digit
    setDisplayValue(newVal);
  }, [displayValue, awaitingOperator])

  const inputDot = useCallback(() => {
    if (awaitingOperator) {
      setDisplayValue("0.");
      setAwaitingOperator(false);
      return;
    }
    if (displayValue.includes(".")) {
      return;
    }
    setDisplayValue(displayValue === "0" || displayValue === "" ? "0." : displayValue + ".");
  }, [displayValue, awaitingOperator])

  const inputOperation = useCallback((nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (!calculatedValue) {
      setCalculatedValue(inputValue)
    } else if (operator) {
      const currentVal = calculatedValue || 0;
      const newValue = calculateValue(operator, currentVal, inputValue);

      setCalculatedValue(newValue);
      setDisplayValue(String(newValue));
    }

    setAwaitingOperator(true);
    setOperator(nextOperator);
  }, [calculatedValue, displayValue, operator])

  useEffect(() => {
    const handleKeyDown = (e) => {
      let { key } = e;

      if ((/\d/).test(key)) {
        inputDigit(key);
      }
      else if (key === "." || key === ",") {
        inputDot();
      }
      else if (key === "Enter") {
        inputOperation("=");
      }
      else if ((/[+-=]/).test(key)) {
        inputOperation(key);
      }
      else if (key === "Delete") {
        clearAll();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [displayValue, inputDigit, inputDot, inputOperation, clearAll]);

  return {
    displayValue,
    operator,
    awaitingOperator,
    inputDigit,
    inputDot,
    inputOperation,
    clearAll
  };
}

export default useCalculate;