import { get, WEATHER_API_KEY, IPGEOLOCATION_API_KEY } from './api.js';
import { KtoC } from './utils.js';
import { links } from './links.js';

async function getWeather() {
    const location = await get(`https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}`);

    if (typeof location.city !== null) {
        const weatherData = await get(`https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${WEATHER_API_KEY}`);
        renderWeather(weatherData.main.temp, weatherData.weather);
    }
}

function renderWeather(temp, weather) {
    const weatherInfoPlaceholder = document.querySelector('.js-weather');
    const tempData = KtoC(temp);
    weatherInfoPlaceholder.innerHTML = `
        <h2 class="weather-temp">${tempData}°<span>C</span></h2>
        <span>${weather[0].main}</span>
    `;
}

function renderContent() {
    const contentPlaceholder = document.querySelector('.js-content');
    contentPlaceholder.innerHTML = links.map(({ name, link, icon }) => {
        return `
        <a href="${link}" target="_blank">
        <span  class="js-tooltip">${name}</span>
        ${icon}
        </a>
        `;
    }).join(' ');
    tooltip();
}

function tooltip() {
    let timeout;
    document.querySelectorAll('.js-tooltip').forEach(tooltip => {
        tooltip.onmouseover = function () {
            timeout = setTimeout(() => {
                tooltip.classList.add('show');
            }, 500);
        }
        tooltip.onmouseout = function () {
            clearTimeout(timeout);
            tooltip.classList.remove('show');
        }
    })
}

renderContent();
getWeather();



let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("animation-stopper");
    }, 400);
});
window.addEventListener("load", () => {
    document.body.classList.remove("animation-stopper");
});