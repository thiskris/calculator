// In progress. some of the features may not work


let nextFunc = [];

const clear = document.getElementById("clear");
const sign = document.getElementById("sign");
const percent = document.getElementById("precent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const decimal = document.getElementById("decimal");
const equal = document.getElementById("equal");
const display = document.getElementById("display-num");
const tape = document.getElementById('tape');

const buttons = document.getElementsByClassName("btn");

for (let i = 0; i <= buttons.length - 1; i++) {
  const element = buttons[i].textContent;
  if (!isNaN(element)) {
    let number;
    if (element === "0") {
      number = document.getElementById("zero");
    } else {
      number = document.getElementById(element);
    }

    number.addEventListener("click", function (e) {
      if (nextFunc.length > 2) {
        nextFunc = [];
      } else if (nextFunc.length === 2) {
        display.textContent = this.textContent;
      } else if (display.textContent === "0") {
        display.textContent = this.textContent;
      } else {
        display.textContent += this.textContent;
      }

      console.log(nextFunc);
    });
  }
}

clear.addEventListener("click", () => {
  display.textContent = 0;
});

multiply.addEventListener("click", () => {
  if (nextFunc.length === 2) {
    nextFunc.push(display.textContent);
    doOperation("multiply");
  } else {
    nextFunc.push(display.textContent);
    nextFunc.push("multiply");
  }

  console.log(nextFunc);
});

function doOperation() {
  switch (nextFunc[1]) {
    case "multiply":
        const record = document.createElement('div')
        record.textContent = nextFunc[0] * nextFunc[2];
        tape.appendChild(record);
      break;
  }
}


