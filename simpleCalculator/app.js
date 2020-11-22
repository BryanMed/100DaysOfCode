const buttons = document.querySelectorAll("button");
const equal = document.querySelector("#equal");
const displayOp = document.querySelector("#operations");
const displayRes = document.querySelector("#result");
const erase = document.querySelector("#erase");
const eraseAll = document.querySelector("#eraseAll");

let operations = "";

eraseAll.addEventListener("click", () => {
  displayRes.innerHTML = "Resultado";
  operations = "";
});

erase.addEventListener("click", () => {
  displayOp.innerHTML = displayOp.innerHTML.slice(0, -1);
  operations = operations.slice(0, -1);
});

equal.addEventListener("click", () => {
  operations = eval(operations);
  displayRes.innerHTML = operations;
  operations = operations;
});

for (let button of buttons) {
  button.addEventListener("click", function () {
    console.log(this.value);
    operations += this.value;
    displayOp.innerHTML = operations;
    if (operations.length <= 0) {
      displayOp.innerHTML = "Operaciones";
    }
  });
}
