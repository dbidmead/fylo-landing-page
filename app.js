const emailInput = document.querySelector("#email-input");
const errMessage = document.querySelector(".error-message");
const submitBtn = document.querySelector("#access-btn");

const emailRegEx =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let isInputValid = false;

function handleValidateInput(input) {
  isInputValid = emailRegEx.test(input.value) ? true : false;
  errMessage.style.opacity = isInputValid ? 0 : 1;
}

submitBtn.addEventListener("click", (e) => {
  handleValidateInput(emailInput);
  console.log(isInputValid);
  emailInput.addEventListener("input", () => handleValidateInput(emailInput));
  if (!isInputValid) {
    e.preventDefault();
    errMessage.style.opacity = 1;
  } else {
    emailInput.value = "";
  }
});
