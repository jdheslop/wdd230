const baseURL = "https://jdheslop.github.io/wdd230/chamber/";
const membersURL = "https://jdheslop.github.io/wdd230/chamber/data/members.json";
const membersDirectory = document.querySelector("#membersDirectory");

const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton")

async function getDirectory() {
    const response = await fetch(membersURL);
    const data = await response.json();

    //displayGrid(data.companies);
    displayList(data.companies);

    gridButton.addEventListener("click", () => displayGrid(data.companies));
    listButton.addEventListener("click", () => displayList(data.companies));
}

function displayGrid(companies) {
    membersDirectory.innerHTML = "";

    let companyCards = document.createElement("div");
    companyCards.setAttribute("class", "companyCards");

    companies.forEach((company) => {
        let companyCard = document.createElement("div");
        companyCard.setAttribute("class", "companyCard");

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

        companyCards.appendChild(companyCard);
        membersDirectory.appendChild(companyCards);
    });
}

function displayList(companies)  {
    membersDirectory.innerHTML = "";

    let companyTable = document.createElement("table");
    companyTable.setAttribute("class", "companyTable");
    let tableBody = document.createElement("tbody");

    companies.forEach((company) => {
        let companyRow = document.createElement("tr");
        
        let tableName = document.createElement("td");
        tableName.setAttribute("class", "tableName");
        tableName.textContent = company.name;
        companyRow.appendChild(tableName);

        let tableAddress = document.createElement("td");
        tableAddress.setAttribute("class", "tableAddress")
        tableAddress.textContent = company.address;
        companyRow.appendChild(tableAddress);

        let tablePhone = document.createElement("td");
        tablePhone.setAttribute("class", "tablePhone")
        tablePhone.textContent = company.phone;
        companyRow.appendChild(tablePhone);

        let tableLink = document.createElement("td");
        tableLink.setAttribute("class", "tableLink")

        let tableURL = document.createElement("a");
        tableURL.setAttribute("class", "tableURL")
        tableURL.setAttribute("href", company.website)
        tableURL.setAttribute("target", "blank_")
        tableURL.textContent = company.websiteName;
        
        tableLink.appendChild(tableURL);
        companyRow.appendChild(tableLink);

        tableBody.appendChild(companyRow);
        companyTable.appendChild(tableBody);
        membersDirectory.appendChild(companyTable);
    });
}

getDirectory();



