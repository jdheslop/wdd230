
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
const serviceType = document.querySelectorAll(".serviceType");

servicesButton.addEventListener("click", function() {
    hamburgerMenu(servicesButton, serviceType);
});


//EVENTS HAMBURGER
const eventsButton = document.querySelector("#eventsMenu");
const eventType = document.querySelectorAll(".eventType");

eventsButton.addEventListener("click", function() {
    hamburgerMenu(eventsButton, eventType);
});

//SPOTLIGHTS HAMBURGER
const spotlightsButton = document.querySelector("#spotlightsMenu");
const spotlightType = document.querySelectorAll(".spotlightType");

spotlightsButton.addEventListener("click", function() {
    hamburgerMenu(spotlightsButton, spotlightType);
});



