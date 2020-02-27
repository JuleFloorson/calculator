import { calculate } from "./math.js";
import { appendParagraph } from "./elements.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInput = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__delete");
const calculatorOperators = document.querySelectorAll(".calculator__operator");
const logs = document.querySelector(".bodylog");

let numberOne = 0;
let numberTwo = 0;
let operator = "";

//console.log() ist das gleich wie printf()
//console.log(numberOne, numberTwo, "Hello");

//calculatorOutput.value = add(numberOne, numberTwo);
function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  const result = calculate(numberOne, numberTwo, operator);
  const text = `${numberOne} ${operator} ${numberTwo} = ${result}`;
  appendParagraph(text, logs);
  calculatorOutput.value = result;
}
calculatorResult.addEventListener("click", handleResultClick);

function clear() {
  calculatorOutput.value = "";
}

calculatorClear.addEventListener("click", clear);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    // numberOne = Number(calculatorOutput.value);
    calculatorOutput.value += calculatorInput.innerText;
  }
  console.log(
    "handleCalculatorInputClick",
    numberOne,
    numberTwo,
    calculatorOutput.value
  );
  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInput.forEach(addInputEventListener);

// Operators

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    operator = calculatorOperator.innerText;
    clear();
    console.log(
      "handleCalculatorOperatorClick",
      numberOne,
      numberTwo,
      operator,
      calculatorOutput.value
    );
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
