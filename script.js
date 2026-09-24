const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (message.value.trim() === "") {

        formMessage.textContent = "Please write a message.";

        return;
    }

    formMessage.textContent = "Message sent!";

    message.value = "";

});