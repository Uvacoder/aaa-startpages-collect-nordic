import { config } from './config';
import { fetchData } from './api';
import { setAttributes, getImgs, KtoC } from './helper';
const imgs = Object.keys(getImgs());
const openWeatherURL = () => `https://api.openweathermap.org/data/2.5/weather?q=${config.openWeatherCity}&appid=${config.openWeatherAPIKEY}`

async function getData() {
    const weatherData = await fetchData(openWeatherURL());
    renderWeather(weatherData.weather[0].icon, weatherData.main.temp);
}

function renderWeather(icon, tempData) {
    const weatherInfoPlaceholder = document.querySelector('.js-weather');
    const temp = KtoC(tempData)
    weatherInfoPlaceholder.innerHTML = `<img src='http://openweathermap.org/img/wn/${icon}@2x.png' /><h4>${temp}°C</h4>`
}

function renderClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const clock = document.querySelector('.js-clock');
    clock.innerHTML = `${hours < 10 ? '0' + hours : hours} 
    <div class="c-card__line"></div>
    ${minutes < 10 ? '0' + minutes : minutes}`;
}


function renderGreeting() {
    const greeting = document.querySelector('.js-greeting'),
        datePlaceholder = document.querySelector('.js-date'),
        date = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        dd = weekday[date.getDay()],
        mm = `${date.getDate()} ${months[date.getMonth()]}`,
        yyyy = date.getFullYear();
    const fullDate = new Array(dd, mm, yyyy).join(', ');
    const hours = date.getHours();
    datePlaceholder.textContent = fullDate;
    if (hours >= 4) {
        greeting.textContent = `Morning, ${config.user}`;
    }
    if (hours >= 12 && hours <= 15) {
        greeting.textContent = `Noon, ${config.user}`;
    }
    if (hours >= 15) {
        greeting.textContent = `Afternoon, ${config.user}`;
    }
    if (hours >= 19 && hours <= 22) {
        greeting.textContent = `Night, ${config.user}`;
    }
    if (hours >= 22 || hours <= 4) {
        greeting.textContent = `Have a Sweet Dream, ${config.user}`
    }
}


function renderLinks() {
    const links = document.querySelector('.js-links');
    config.links.forEach(item => {
        const { link, name } = item;
        const a = document.createElement('a');
        const text = document.createTextNode(`${name}`);
        setAttributes(a, { 'href': `${link}`, 'class': 'c-card__link', 'target': '_blank' });
        a.appendChild(text);
        links.appendChild(a);
    })
}

export { getData, renderClock, renderGreeting, renderLinks, imgs }