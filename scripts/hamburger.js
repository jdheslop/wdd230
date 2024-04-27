const hamburgerButton = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", function () {
    navbar.classList.toggle("displayMenu");
    hamburgerButton.classList.toggle("display");
});