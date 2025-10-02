let currentInput = "";
let var1 = null;
let var2 = null;
let operator = null;
let resultDisplayed = false;
let operatorPressed = false;

const display = document.getElementById("display");
const buttons = document.querySelectorAll("#calculator button");

function updateDisplay(value){
  display.textContent = value;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)){
      if (resultDisplayed){
        currentInput = value
        resultDisplayed = false;
      }

      else if (operatorPressed){
        currentInput = value;
        operatorPressed = false;
      }

      else {
        currentInput += value;
      }
      updateDisplay(currentInput);
    }

    else{
      if (["+", "-", "x", "÷"].includes(value)){
        var1 = +currentInput;
        operator = value;
        operatorPressed = true;
      }

      if (value == "="){
        var2 = currentInput;
        currentInput = "";
        if (operator == "+"){
          updateDisplay(add(+var1, +var2));
          resultDisplayed = true;
        }

        if (operator == "-"){
          updateDisplay(subtract(+var1, +var2));
          resultDisplayed = true;
        }

        if (operator == "x"){
          updateDisplay(multiply(+var1, +var2));
          resultDisplayed = true;
        }

        if (operator == "÷"){
          updateDisplay(divide(+var1, +var2));
          resultDisplayed = true;
        }

        operator = null;
      }
    }
  })
})


function assign(num1, num2, operator){
    
}

const add = function(num1, num2) {
	return num1 + num2;
}

const subtract = function(num1, num2) {
	return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}