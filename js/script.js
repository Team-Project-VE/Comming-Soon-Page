const secondsEl = document.querySelector('.seconds .number');
const minutesEl = document.querySelector('.minutes .number');
const hoursEl = document.querySelector('.hours .number');
const daysEl = document.querySelector('.days .number');

let secValue = Number(localStorage.getItem('seconds')) || 11;
let minValue = Number(localStorage.getItem('minutes')) || 2;
let hourValue = Number(localStorage.getItem('hours')) || 2;
let dayValue = Number(localStorage.getItem('days')) || 13;

const timeFunction = setInterval(() => {
    secValue--;

    if(secValue === -1) {
        minValue--;
        secValue = 59;
        if(minValue === -1) {
            hourValue--;
            minValue = 59;
            if(hourValue === -1) {
                dayValue--;
                hourValue = 23;
                if(dayValue === -1) {
                    clearInterval(timeFunction);
                }
            }
        }
    }

    localStorage.setItem('seconds', secValue);
    localStorage.setItem('minutes', minValue);
    localStorage.setItem('hours', hourValue);
    localStorage.setItem('days', dayValue);

    secondsEl.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutesEl.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hoursEl.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    daysEl.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000);
