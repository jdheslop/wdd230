const baseURL = "https://jdheslop.github.io/wdd230/";
const linksURL = "https://jdheslop.github.io/wdd230/data/links.json";
const weeksUL = document.querySelector("#weeks");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);

    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    weeks.forEach((activities) => {
        let week = document.createElement("li");
        week.textContent = `${activities.week}: `
    
        activities.links.forEach((topic) => {
            let item = document.createElement("a");
            item.setAttribute("href", topic.url);
            item.textContent = topic.title;
            week.appendChild(item);
        });
        
        weeksUL.appendChild(week);    
    });
}

getLinks();
