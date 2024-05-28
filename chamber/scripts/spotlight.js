const spotlightURL = "https://jdheslop.github.io/wdd230/chamber/data/members.json";
const spotlightCards = document.querySelector("#spotlightCards");
const spotlightsButton = document.querySelector("#spotlightsMenu");

async function getSpotlights() {
    const spotlightResponse = await fetch(spotlightURL);
    const spotlightData = await spotlightResponse.json();

    // Filter for gold and silver companies
    const filteredCompanies = spotlightData.companies.filter(company => 
        company.level === "gold" || company.level === "silver"
    );
    
    // Shuffle the filtered companies
    const shuffledCompanies = filteredCompanies.sort(() => 0.5 - Math.random());

    // Select the first three companies
    const spotlightCompanies = shuffledCompanies.slice(0, 3);

    displaySpotlights(spotlightCompanies);
}

function displaySpotlights(companies) {

    // Clear the previous spotlights
    spotlightCards.innerHTML = "";

    companies.forEach((company) => {
        let companyCard = document.createElement("div");
        companyCard.setAttribute("class", "card spotlightCard");

        let directoryImage = document.createElement("img");
        directoryImage.setAttribute("class", "directoryImage");
        directoryImage.setAttribute("src", company.icon);
        directoryImage.setAttribute("alt", `${company.name} company logo`)
        companyCard.appendChild(directoryImage);

        let directoryName = document.createElement("h4");
        directoryName.setAttribute("class", "gridName");
        directoryName.textContent = company.name;
        companyCard.appendChild(directoryName);

        let directoryAddress = document.createElement("p");
        directoryAddress.setAttribute("class", "gridAddress")
        directoryAddress.textContent = company.address;
        companyCard.appendChild(directoryAddress);

        let directoryPhone = document.createElement("p");
        directoryPhone.setAttribute("class", "gridPhone")
        directoryPhone.textContent = company.phone;
        companyCard.appendChild(directoryPhone);

        let directoryURL = document.createElement("a");
        directoryURL.setAttribute("class", "gridURL")
        directoryURL.setAttribute("href", company.website)
        directoryURL.setAttribute("target", "blank_")
        directoryURL.textContent = company.websiteName;
        companyCard.appendChild(directoryURL);

        spotlightCards.appendChild(companyCard);
    })

    spotlightsButton.addEventListener("click", function() {
        spotlightCards.classList.toggle("displayMenu");

        spotlightsButton.classList.toggle("display");
    });
}

getSpotlights();