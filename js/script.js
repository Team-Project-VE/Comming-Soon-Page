const seconds = document.querySelector('.seconds .number');
const minutes = document.querySelector('.minutes .number');
const hours = document.querySelector('.hours .number');
const days = document.querySelector('.days .number');

let secValue = 11;
let minValue = 2;
let hourValue = 2;
let dayValue = 4;

const timeFunction = setInterval(() => {
    secValue--;

    if(secValue === 0) {
        minValue--;
        secValue = 60;
    }
    if(minValue === 0) {
        hourValue--;
        minValue = 60;
    }
    if(hourValue === 0) {
        dayValue--;
        hourValue = 60;
    }

    if(dayValue === 0) {
        clearInterval(timeFunction);
    }
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000)