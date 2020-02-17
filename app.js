const result = document.querySelector(".result-box");
let firstNumberArr = []; // * Array with current number
let firstNumberInt;
let numbersArr = []; // * Array with every number typed in
let resultInt;
let signArr = [];
let signCounter = 0;

function init() {
  document
    .querySelector(".main-container")
    .addEventListener("click", function(event) {
      if (event.target.tagName === "BUTTON") {
        if (event.target.className.includes("number-box") === true) {
          numberClicked();
        } else if (event.target.className.includes("operation-box") === true) {
          operationClicked();
        } else if (event.target.className.includes("equal-box") === true) {
          calucate();
        } else if (event.target.className.includes("backspace-box") === true) {
          backspace();
        } else if (event.target.className.includes("clear-box") === true) {
          clearClicked();
        }
      }
    });
}

function numberClicked() {
  // * Keeping track of every number clicked and throwing it in array
  signCounter = 0;
  firstNumberArr.push(event.target.innerText);
  firstNumberInt = Number(firstNumberArr.join(""));
  /* console.log(`Current number ${firstNumberInt}`); */
  displayResult("Number");
}

function operationClicked() {
  signCounter += 1;
  if (signCounter === 1) {
    numbersArr = numbersArr.filter(Number);
    numbersArr.push(firstNumberInt);
    signArr.push(event.target.innerText);
    firstNumberArr = [];
    firstNumberInt = null;
    /*  console.log(numbersArr);
    console.log(signArr); */
    displayResult("Sign");
  } else if (signCounter === 2) {
    signArr.pop();
    signCounter = 0;
    operationClicked();
  }
}

function calucate() {
  numbersArr = numbersArr.filter(Number);
  signCounter = 0;
  numbersArr.push(firstNumberInt);
  firstNumberArr = [];
  firstNumberInt = null;
  if (numbersArr.length === 1) {
    let currentNumber = numbersArr[0];
    resultInt = currentNumber;
  } else {
    for (let i = 0; i < numbersArr.length; i++) {
      if (i === 0) {
        let currentNumber = numbersArr[0];
        resultInt = currentNumber;
      } else {
        let currentNumber = numbersArr[i];
        let currentSign = signArr[i - 1];
        if (currentSign === "-") {
          resultInt -= currentNumber;
        } else if (currentSign === "x") {
          resultInt *= currentNumber;
        } else if (currentSign === "+") {
          resultInt += currentNumber;
        } else if (currentSign === "÷") {
          resultInt /= currentNumber;
        }
      }
    }
  }
  /*   console.log(`Result: ${resultInt}`); */
  displayResult("Result");
}

function backspace() {
  firstNumberArr.pop();
  firstNumberInt = Number(firstNumberArr.join(""));
  /*  console.log(`Current number ${firstNumberInt}`); */
  displayResult("Number");
}

function clearClicked() {
  firstNumberArr = [];
  firstNumberInt = null;
  numbersArr = [];
  resultInt = null;
  signArr = [];
  signCounter = 0;
  displayResult("clearRes");
  /* console.log("Cleared"); */
}

function displayResult(stage) {
  if (stage === "Number") {
    result.innerText = firstNumberInt;
  } else if (stage === "Result") {
    result.innerText = resultInt;
  } else if (stage === "Sign") {
    let currentSign = signArr[signArr.length - 1];
    result.innerText = `${currentSign}`;
  } else if (stage === "clearRes") {
    result.innerText = "0";
  }
}

init();
