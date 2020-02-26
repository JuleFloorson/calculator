"use strict";

const calculatorOutput = document.querySelector(".calculator__output");
const calculatorInput = document.querySelectorAll(".calculator__input");
const calculatorResult = document.querySelector(".calculator__result");
const calculatorClear = document.querySelector(".calculator__delete");

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
const numberOne = Number(calculatorInput[5].innerText);
const numberTwo = Number(calculatorInput[6].innerText);

//console.log() ist das gleich wie printf()
//console.log(numberOne, numberTwo, "Hello");

//calculatorOutput.value = add(numberOne, numberTwo);
function handleClick() {
  calculatorOutput.value = subtract(numberOne, numberTwo);

  console.log("clicked");
}
calculatorResult.addEventListener("click", handleClick);

function clear() {
  calculatorOutput.value = "";
}

calculatorClear.addEventListener("click", clear);

function addInputEventListener(calculatorInput) {
  function handleCalculatorInputClick() {
    calculatorOutput.value = calculatorInput.innerText;
  }

  calculatorInput.addEventListener("click", handleCalculatorInputClick);
}
calculatorInput.forEach(addInputEventListener);
