
const visitsDisplay = document.querySelector(".visits");

let numberOfVisits = Number(window.localStorage.getItem("visitCount-ls")) || 0;

if (numberOfVisits === 0) {
    visitsDisplay.textContent = `This is your first page visit.`;    
} else {
    visitsDisplay.textContent = `Page Visits: ${numberOfVisits}`;
}

// Increase the number of visits by one and store to local storage
numberOfVisits++;
localStorage.setItem("visitCount-ls", numberOfVisits);

