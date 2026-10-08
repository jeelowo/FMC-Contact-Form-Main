const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const message = document.getElementById("message");
const email = document.getElementById("email");
const consent = document.getElementById("consent");
const general = document.getElementById("general");
const support = document.getElementById("support");

const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const messageError = document.getElementById("message-error");
const emailError = document.getElementById("email-error");
const consentError = document.getElementById("consent-error");
const queryError = document.getElementById("query-error");

const successToast = document.getElementById("success-toast");
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

