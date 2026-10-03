const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector("#first-name-error");
const form = document.querySelector("form");

form.noValidate = true;

form.addEventListener("submit", (event) => {
    if (!firstName.checkValidity()) {
        event.preventDefault();
        firstNameError.hidden = false;
        firstName.classList.add("error");
        firstName.focus();
    } else {
        firstNameError.hidden = true;
    }
});