"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInput = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__delete");
const calculatorOperator = document.querySelector(".calculator__operator");

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
let numberOne = 0;
let numberTwo = 0;

//console.log() ist das gleich wie printf()
//console.log(numberOne, numberTwo, "Hello");

//calculatorOutput.value = add(numberOne, numberTwo);
function handleResultClick() {
  calculatorOutput.value = subtract(numberOne, numberTwo);

  console.log("clicked");
}
calculatorResult.addEventListener("click", handleResultClick);

function clear() {
  calculatorOutput.value = "";
}

calculatorClear.addEventListener("click", clear);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    numberOne = Number(calculatorOutput.value);
    calculatorOutput.value += calculatorInput.innerText;
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}

calculatorInput.forEach(addInputEventListener);
