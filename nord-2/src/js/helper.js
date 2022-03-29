import { imgs } from './app';

function importImgs(r) {
    let images = {};
    r.keys().map((img) => {
        images[img.replace('./', './assets/')] = r(img);
    });
    return images;
}

function getRandom() {
    return Math.floor(Math.random() * imgs.length);
}

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

function getImgs() {
    return importImgs(require.context('/src/assets', false, /\.(gif)$/));
}
export { importImgs, getRandom, setAttributes, KtoC, getImgs }