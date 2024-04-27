const modeButton = document.querySelector("#darkMode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const cardHeader = document.querySelectorAll(".cardHeader");
const footer = document.querySelector("footer");
const links = document.querySelectorAll(".card a")

modeButton.addEventListener("click", function () {
	if (modeButton.textContent.includes("Dark Mode")) {
        header.style.color = "#ffffff";

		main.style.background = "#807475";
		main.style.color = "#ffffff";

        cardHeader.forEach((header) => {
            header.style.color = "#ffffff";
        });

        links.forEach((link) => {
            link.style.color = "#ffffff";
            link.style.textDecoration = "underline"; 
        });

        footer.style.color = "#ffffff"

		modeButton.textContent = "Light Mode";
        modeButton.style.color = "#ffffff"
        modeButton.style.background = "#403737"
	} else {
        header.style.color = "#000000";

		main.style.background = "rgba(251,251,235, 0.05";
		main.style.color = "#403737";

        cardHeader.forEach((header) => {
            header.style.color = "#000000";
        });        

        links.forEach((link) => {
            link.style.color = "#551A8B";
            link.style.textDecoration = "none"; 
        });

        footer.style.color = "#000000"

		modeButton.textContent = "Dark Mode";
        modeButton.style.color = "#403737"
        modeButton.style.background = "rgba(180,172,164, 1)"
	}
});
