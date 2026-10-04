const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const message = document.querySelector("#message");
const email = document.querySelector("#email");
const consent = document.querySelector("#consent");
const general = document.querySelector("#general");
const support = document.querySelector("#support");

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const messageError = document.querySelector("#message-error");
const emailError = document.querySelector("#email-error");
const consentError = document.querySelector("#consent-error");
const queryError = document.querySelector("#query-error");

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

    if (!lastName.checkValidity()) {
        event.preventDefault();
        lastNameError.hidden = false;
        lastName.classList.add("error");
        lastName.focus();
    } else {
        lastNameError.hidden = true;
    }   

    if (!message.checkValidity()) {
        event.preventDefault();
        messageError.hidden = false;
        message.classList.add("error");
        message.focus();
    } else {
        messageError.hidden = true;
    }

    if (!email.checkValidity()) {
        event.preventDefault();
        emailError.hidden = false;
        email.classList.add("error");
        email.focus();
    } else {
        emailError.hidden = true;
    }

    if (!consent.checkValidity()) {
        event.preventDefault();
        consentError.hidden = false;
        consent.classList.add("error");
        consent.focus();
    } else {
        consentError.hidden = true;
    }

    if (!consent.checkValidity()) {
        event.preventDefault();
        consentError.hidden = false;
        consent.classList.add("error");
        consent.focus();
    } else {
        consentError.hidden = true;
    }

    if (!general.checkValidity()) {
        event.preventDefault();
        queryError.hidden = false;
        general.classList.add("error");
        general.focus();
    } else {
        queryError.hidden = true;
    }
});

