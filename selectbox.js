document.title = "Choose your degree"
const h4ElOne = document.getElementById("h4El-one");
const h4ElTwo = document.getElementById("h4El-two");
const h4ElThree = document.getElementById("h4El-three");
const h4ElFour = document.getElementById("h4El-four");
const h4ElFive = document.getElementById("h4El-five");
const divisionEls = document.querySelector("div");
const inputEl = document.getElementById("input-el");
const label = document.querySelector("label");
let count = 0;
inputEl.addEventListener("click", function () {
    count += 1;
    label.innerHTML = count;
    if (label.innerHTML % 2 == 1) {
        divisionEls.style.visibility = "visible";
    } else {
        divisionEls.style.visibility = "hidden";
    }

});

h4ElOne.addEventListener("click", function () {
    inputEl.value = h4ElOne.innerHTML;
    divisionEls.style.visibility = "hidden";
});

h4ElTwo.addEventListener("click", function () {
    inputEl.value = h4ElTwo.innerHTML;
    divisionEls.style.visibility = "hidden";
});

h4ElThree.addEventListener("click", function () {
    inputEl.value = h4ElThree.innerHTML;
    divisionEls.style.visibility = "hidden";
});

h4ElFour.addEventListener("click", function () {
    inputEl.value = h4ElFour.innerHTML;
    divisionEls.style.visibility = "hidden";
});

h4ElFive.addEventListener("click", function () {
    inputEl.value = h4ElFive.innerHTML;
    divisionEls.style.visibility = "hidden";
});