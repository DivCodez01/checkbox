const button = document.getElementsByTagName("button");
const input = document.querySelector("input");
const calvalue = document.getElementsByTagName("p");

button[0].addEventListener("click", (ev) => {
    if (button[0].innerHTML == "subscribe") {
        button[0].innerHTML = "subscribed";
        button[0].className = "suscribed";
    } else {
        button[0].innerHTML = "subscribe";
        button[0].className = "";
    }
})

const calculate = () => {
    let inputValue = Number(input.value);

    if (inputValue < 40) {
        inputValue = inputValue + 10;
        calvalue[2].innerHTML = `$${inputValue}`;
    }

    calvalue[2].innerHTML = `$${inputValue}`;

    if (calvalue[2].innerHTML == "$NaN") {
        calvalue[2].innerHTML = `It was not number!\nType number...`;
    }
}

button[1].addEventListener("click", (ev) => {
    calculate()
})

input.addEventListener("change", (ev) => {
    calculate()
})