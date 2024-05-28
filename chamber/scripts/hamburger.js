
// NAV HAMBURGER
const hamburgerButton = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", function () {
    navbar.classList.toggle("displayMenu");
    hamburgerButton.classList.toggle("display");
});


// FUNCTION FOR OTHER MENUS
function hamburgerMenu(button, data) {
    data.forEach(function (type) {
        type.classList.toggle("displayMenu");
    });

    button.classList.toggle("display");
}

//SERVICES HAMBURGER
const servicesButton = document.querySelector("#servicesMenu");
const serviceCard = document.querySelectorAll(".serviceCard");

servicesButton.addEventListener("click", function() {
    hamburgerMenu(servicesButton, serviceCard);
});


//EVENTS HAMBURGER
const eventsButton = document.querySelector("#eventsMenu");
const eventCard = document.querySelectorAll(".eventCard");

eventsButton.addEventListener("click", function() {
    hamburgerMenu(eventsButton, eventCard);
});



