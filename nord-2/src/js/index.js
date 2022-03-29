import '../scss/main.scss';
import { getRandom } from './helper';
import { renderClock, renderGreeting, renderLinks, getData, imgs } from './app'


setInterval(() => renderClock(), 1000);
renderGreeting();
renderLinks()
getData();

window.addEventListener('DOMContentLoaded', () => {
    const random = getRandom()
    document.querySelector('.js-aside').style.backgroundImage = `url(${imgs[random]})`
});