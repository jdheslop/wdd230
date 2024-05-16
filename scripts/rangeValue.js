const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}