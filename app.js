const result = document.querySelector(".result-box");
let firstNumber = [];

function init() {
  document
    .querySelector(".main-container")
    .addEventListener("click", function(event) {
      if (event.target.tagName === "BUTTON") {
        /*  console.log(`Clicked: ${event.target.innerText}`);
        console.log(event.target.className.includes("number-box")); */
        if (event.target.className.includes("number-box") === true) {
          numberClicked();
        }
      }
    });
}

function numberClicked() {
  /* 
 ! zamień to potem ze stringów na inty i przy wyświetlaniu na odwrót :))))))))))
*/
  console.log(event.target.innerText);
  firstNumber.push(event.target.innerText);
  console.log(firstNumber);
  displayResult();
}

function displayResult() {
  console.log(firstNumber.join);
}

init();
