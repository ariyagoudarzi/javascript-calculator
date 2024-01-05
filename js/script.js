let one = document.getElementById("1");
let two = document.getElementById("2");
let there = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let times = document.getElementById("times");
let result = document.getElementById("result");
let taqsim = document.getElementById("taqsim");
let equals = document.getElementById("equals");

one.addEventListener("click", function () {
  result.innerHTML += +one.getAttribute("value");
});
two.addEventListener("click", function () {
  result.innerHTML += +two.getAttribute("value");
});
there.addEventListener("click", function () {
  result.innerHTML += +there.getAttribute("value");
});
four.addEventListener("click", function () {
  result.innerHTML += +four.getAttribute("value");
});
five.addEventListener("click", function () {
  result.innerHTML += +five.getAttribute("value");
});
six.addEventListener("click", function () {
  result.innerHTML += +six.getAttribute("value");
});
seven.addEventListener("click", function () {
  result.innerHTML += +seven.getAttribute("value");
});
eight.addEventListener("click", function () {
  result.innerHTML += +eight.getAttribute("value");
});
nine.addEventListener("click", function () {
  result.innerHTML += +nine.getAttribute("value");
});
plus.addEventListener("click", function () {
  result.innerHTML += plus.getAttribute("value");
});
minus.addEventListener("click", function () {
  result.innerHTML += minus.getAttribute("value");
});
times.addEventListener("click", function () {
  result.innerHTML += times.getAttribute("value");
});
taqsim.addEventListener("click", function () {
  result.innerHTML += taqsim.getAttribute("value");
});
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key >= 0 && event.key <= 9) {
    result.innerHTML += event.key;
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    result.innerHTML += event.key;
  } else if (event.key === "=" || event.key === "Enter") {
    let answer = eval(result.innerHTML);
    result.innerText = answer;
  } else if (event.key === "Backspace" || event.key === "Delete") {
    result.innerText = "";
  }
});
equals.addEventListener("click", function () {
  let answer = eval(result.innerHTML);
  result.innerText = answer;
});

let firstClick = true;
document.addEventListener("click", function () {
  madeClearBtn();
});
document.addEventListener("keydown", function () {
  madeClearBtn();
});
function madeClearBtn() {
  if (firstClick == true) {
    let button = document.createElement("button");
    button.setAttribute("class", "opereitorsbtn");
    button.setAttribute("onClick", "clearText()");
    button.textContent = "⇚";
    let operatorsBox = document.querySelector(".opereitorsbox");
    operatorsBox.appendChild(button);
    firstClick = false;
  }
}
function clearText() {
  result.innerText = "";
}
