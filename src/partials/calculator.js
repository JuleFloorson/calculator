import { add, subtract, multiply, divide, calculate } from "./math.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInput = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__delete");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

let numberOne = 0;
let numberTwo = 0;
let operator = "";

//console.log() ist das gleich wie printf()
//console.log(numberOne, numberTwo, "Hello");

//calculatorOutput.value = add(numberOne, numberTwo);
function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = calculate(numberOne, numberTwo, operator);
  console.log(
    "handleResultClick",
    numberOne,
    numberTwo,
    calculatorOutput.value
  );
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
