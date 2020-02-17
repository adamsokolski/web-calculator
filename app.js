const result = document.querySelector(".result-box");
let firstNumberArr = []; // * Array with current number
let firstNumberInt;
let numbersArr = []; // * Array with every number typed in
let resultInt;
let signArr = [];

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
        }
      }
    });
}

function numberClicked() {
  // * Keeping track of every number clicked and throwing it in array
  firstNumberArr.push(event.target.innerText);
  firstNumberInt = Number(firstNumberArr.join(""));
  console.log(`Current number ${firstNumberInt}`);
  displayResult();
}

function operationClicked() {
  numbersArr.push(firstNumberInt);
  signArr.push(event.target.innerText);
  firstNumberArr = [];
  firstNumberInt = null;
  console.log(numbersArr);
  console.log(signArr);
}
function calucate() {
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
  console.log(`Result: ${resultInt}`);
}

function equalClicked() {}

function displayResult() {
  result.innerText = resultInt;
}

init();
