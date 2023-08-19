let result = 0;
let firstNum = 0;
let secondNum = 0;
let operator = "";

function getSum(num1, num2) {
  return num1 + num2;
}

function getSubstraction(num1, num2) {
  return num1 - num2;
}

function getMultiplication(num1, num2) {
  return num1 * num2;
}

function getDivision(num1, num2) {
  return num1 / num2;
}

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      result = getSum(firstNum, secondNum);
      return result;
      break;
    case "-":
      result = getSubstraction(firstNum, secondNum);
      return result;
      break;
    case "*":
      result = getMultiplication(firstNum, secondNum);
      return result;
      break;
    case "/":
      result = getDivision(firstNum, secondNum);
      return result;
      break;
  }
}

let input = document.querySelector(".input");
const calcButtons = document.querySelectorAll("#container div");

function getUserInput(e) {
  console.log(this);
  if (this.textContent === "0" && input.textContent === "0") {
    return;
  } else if (input.textContent === "0") {
    input.textContent = this.textContent;
  } else {
    input.textContent += this.textContent;
  }
}

calcButtons.forEach((btn) => {
  btn.addEventListener("click", getUserInput);
});
