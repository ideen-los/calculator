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
      break;
    case "-":
      result = getSubstraction(firstNum, secondNum);
      break;
    case "×":
      result = getMultiplication(firstNum, secondNum);
      break;
    case "÷":
      result = getDivision(firstNum, secondNum);
      break;
  }
}

let input = document.querySelector(".input");
const calcButtons = document.querySelectorAll("#container div");

let operatorPressed = false;
let dotUsed = false;

function getUserInput() {
  if (
    !this.classList.contains("operator") &&
    this.classList.contains("clear")
  ) {
    console.log("if statement 1");
    input.textContent = "0";
    result = 0;
    firstNum = 0;
    secondNum = 0;
    operator = "";
    operatorPressed = false;
  } else if (
    !this.classList.contains("operator") &&
    this.classList.contains("dot")
  ) {
    switch (input.textContent.includes(".")) {
      case true:
        console.log("if statement 2-1");
        return;
      default:
        console.log("if statement 2-2");
        input.textContent += this.textContent;
    }
  } else if (this.classList.contains("operator")) {
    if (operatorPressed === true) {
      console.log("if statement 3-1");
      return;
    }
    switch (firstNum) {
      case 0:
        console.log("if statement 3-2");
        operatorPressed = true;
        firstNum = +input.textContent;
        operator = this.textContent;
        break;
      default:
        console.log("if statement 3-3");
        operatorPressed = true;
        secondNum = +input.textContent;
        operate(firstNum, secondNum, operator);
        input.textContent = result;
        firstNum = result;
        if (this.textContent === "=") {
          operator = "";
          operatorPressed = false;
        } else {
          operator = this.textContent;
        }
        secondNum = 0;
    }
  } else if (!this.classList.contains("operator")) {
    switch (input.textContent) {
      case "0":
        console.log("if statement 4-1");
        input.textContent = this.textContent;
        break;
      default:
        if (operatorPressed === true) {
          console.log("if statement 4-2-1");
          input.textContent = this.textContent;
          operatorPressed = false;
        } else {
          console.log("if statement 4-2-2");
          input.textContent += this.textContent;
        }
    }
  }
}

calcButtons.forEach((btn) => {
  btn.addEventListener("click", getUserInput);
});

function keyboardCalculator(e) {
  console.log(e);
  switch (e.keyCode) {
    case 48:
      document.querySelector(".zero").click();
      break;
    case 49:
      document.querySelector(".one").click();
      break;
    case 50:
      document.querySelector(".two").click();
      break;
    case 51:
      document.querySelector(".three").click();
      break;
    case 52:
      document.querySelector(".four").click();
      break;
    case 53:
      document.querySelector(".five").click();
      break;
    case 54:
      document.querySelector(".six").click();
      break;
    case 55:
      if (e.shiftKey) {
        document.querySelector(".divide").click();
      } else {
        document.querySelector(".seven").click();
      }
      break;
    case 56:
      document.querySelector(".eight").click();
      break;
    case 57:
      document.querySelector(".nine").click();
      break;
    case 190:
      document.querySelector(".dot").click();
      break;
    case 189:
      document.querySelector(".substract").click();
      break;
    case 187:
      if (e.shiftKey) {
        document.querySelector(".multiply").click();
      } else {
        document.querySelector(".add").click();
      }
      break;
    case 27:
      document.querySelector(".clear").click();
      break;
    case 13:
      document.querySelector(".operate").click();
      break;
    case 8:
      if (input.textContent.length > 1) {
        input.textContent = input.textContent.slice(0, -1);
      } else {
        input.textContent = "0";
      }
      break;
  }
}

document.addEventListener("keydown", keyboardCalculator);
