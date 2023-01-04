const guessForm = document.querySelector("#guess");
const max = document.querySelector("#guess h3 input");
const chose = document.querySelector("#guess h4 input");
const message1 = document.querySelector(".message span:first-child");
const message2 = document.querySelector(".message span:last-child");

function guessPlay(event) {
  event.preventDefault();
  const maxNumber = max.value;
  const choseNumber = chose.value;

  const machine = Math.ceil(Math.random() * maxNumber);
  message1.innerText = `You chose: ${choseNumber} the machine chose: ${machine}.`;
  if (parseInt(choseNumber) === parseInt(machine)) {
    message2.innerText = "You Won!";
  } else {
    message2.innerText = "You Lost!";
  }
}

guessForm.addEventListener("submit", guessPlay);
