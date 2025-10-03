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
      if (value == "C"){
        var1 = null;
        var2 = null;
        operator = null;
        updateDisplay("");
        resultDisplayed = false;
        operatorPressed = false;
      }

      if (["+", "-", "x", "÷"].includes(value)){
        if (resultDisplayed) {
          operator = value;
          operatorPressed = true;
          resultDisplayed = false;
          currentInput = "";
          return;
        }

        if (operator != null && currentInput != ""){
          var2 = currentInput;

          if (operator == "+"){
            var1 = add(+var1, +var2);
          }

          if (operator == "-"){
            var1 = subtract(+var1, +var2);
          }

          if (operator == "x"){
            var1 = multiply(+var1, +var2);
          }

          if (operator == "÷"){
            var1 = divide(+var1, +var2);

            if (var1 === "Error") {
              updateDisplay(var1);
              var1 = null;
              var2 = null;
              operator = null;
              currentInput = "";
              resultDisplayed = false;
              operatorPressed = false;
              return;
            }
          }

          updateDisplay(var1);
          currentInput = "";
          operator = value;
          operatorPressed = true;
          resultDisplayed = false;
        }

        else if (var1 == null && currentInput != "") {
        var1 = +currentInput;
        operator = value;
        operatorPressed = true;
        }
      }
      if (value == "="){
        if (operator != null && currentInput != ""){
          var2 = currentInput;
          currentInput = "";
          if (operator == "+"){
            var1 = add(+var1, +var2);
            updateDisplay(var1);
            resultDisplayed = true;
          }
          if (operator == "-"){
            var1 = subtract(+var1, +var2);
            updateDisplay(var1);
            resultDisplayed = true;
          }
          if (operator == "x"){
            var1 = multiply(+var1, +var2);
            updateDisplay(var1);
            resultDisplayed = true;
          }
          if (operator == "÷"){
            var1 = divide(+var1, +var2);
            updateDisplay(var1);
            resultDisplayed = true;

            if (var1 === "Error") {
              updateDisplay(var1);
              var1 = null;
              var2 = null;
              operator = null;
              currentInput = "";
              resultDisplayed = false;
              operatorPressed = false;
              return;
            }
          }
          operator = null;
        }
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
  if (num2 == 0){
    return "Error";
  }
  return num1 / num2;
}