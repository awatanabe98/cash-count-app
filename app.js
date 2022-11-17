let count = 0.00;
let countEl = document.getElementById("count-el");
let saveEl = docment.getElementById("save-el");

function incrementOne() {
  count += 1.00;
  countEl.innerText = count;
}

function incrementFive() {
  count += 5.00;
  countEl.innerText = count;
}

function incrementTen() {
  count += 10.00;
  countEl.innerText = count;
}

function incrementTwenty() {
  count += 20.00;
  countEl.innerText = count;
}

function incrementFifty() {
  count += 50.00;
  countEl.innerText = count;
}

function incrementHundred() {
  count += 100.00;
  countEl.innerText = count;
}

function save() {
  countStr = count + ".";
  saveEl.textContent += countStr;

  countEl.textContent = 0;
  count = 0;
};