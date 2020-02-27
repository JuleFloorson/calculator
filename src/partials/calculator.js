import { add } from "./math.js";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInput = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__delete");
const calculatorOperators = document.querySelectorAll(".calculator__operator");

let numberOne = 0;
let numberTwo = 0;

//console.log() ist das gleich wie printf()
//console.log(numberOne, numberTwo, "Hello");

//calculatorOutput.value = add(numberOne, numberTwo);
function handleResultClick() {
  numberTwo = Number(calculatorOutput.value);
  calculatorOutput.value = add(numberOne, numberTwo);

  console.log("clicked");
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

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInput.forEach(addInputEventListener);

// Operators

function addOperatorEventListener(calculatorOperator) {
  function handleCalculatorOperatorClick() {
    numberOne = Number(calculatorOutput.value);
    clear();
    console.log(
      "handleCalculatorOperatorClick",
      numberOne,
      numberTwo,
      calculatorOutput.value
    );
  }
  calculatorOperator.addEventListener("click", handleCalculatorOperatorClick);
}
calculatorOperators.forEach(addOperatorEventListener);
