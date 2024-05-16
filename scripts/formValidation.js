const password1 = document.querySelector("input[name=password1]");
const password2 = document.querySelector("input[name=password2]");
const feedback = document.querySelector("#feedback");

let incorrectPasswordColor = getComputedStyle(document.documentElement).getPropertyValue("--incorrectPassword");
let correctPasswordColor = getComputedStyle(document.documentElement).getPropertyValue("--correctPassword");

password2.addEventListener("focusout", validatePassword)

function validatePassword() {
    if (password1.value !== password2.value) {
        feedback.textContent = "Password values do not match.";
        feedback.style.color = incorrectPasswordColor;
        password1.value = "";
        password2.value = "";
        password1.focus();
    } else {
        if (password2.value !== "") {
            feedback.textContent = "Password values match.";
            feedback.style.color = correctPasswordColor;
        }
    }
}

