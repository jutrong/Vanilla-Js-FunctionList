const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
const resetBtn = document.querySelector("#reset-btn");
const number = document.querySelector(".number");

let count = 0;

function increaseHandler() {
  count += 1;
  number.innerText = count;
}
function decreaseHandler() {
  count -= 1;
  number.innerText = count;
}
function resetHandler() {
  count = 0;
  number.innerText = count;
}

increaseBtn.addEventListener('click', increaseHandler);
decreaseBtn.addEventListener('click', decreaseHandler);
resetBtn.addEventListener('click', resetHandler);

