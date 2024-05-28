
const banner = document.querySelector("#banner");
const bannerButton = document.querySelector("#closeBanner");

let today = new Date();
let dayOfWeek = today.getDay();

// Sunday = 0 and Saturday = 6)
if (dayOfWeek >=1 && dayOfWeek <= 3) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

bannerButton.addEventListener("click", function () {
    banner.style.display = "none";
})
