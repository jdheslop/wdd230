const visitMessage = document.querySelector("#visitMessage");

const msToDays = 84600000;
const today = new Date();

let lastVisit = window.localStorage.getItem("lastVisit-ls") || "";

// I used the following line for testing.
// let lastVisit = "Fri May 5 2024 13:35:09 GMT+0200 (Mitteleuropäische Sommerzeit)"

if (lastVisit === "") {
    visitMessage.textContent = `Welcome! Let us know if you have any questions.`;
} else {
    let difference = (Date.now() - new Date(lastVisit).getTime()) / msToDays;
    if (difference < 1) {
        visitMessage.textContent = `Back so soon! Awesome!`;
    } else if (difference < 2) {
        visitMessage.textContent = `You last visited 1 day ago.`;
    } else {
        visitMessage.textContent = `You last visited ${Math.round(difference)} days ago.`;
    }
}

localStorage.setItem("lastVisit-ls", today)
