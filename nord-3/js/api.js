const WEATHER_API_KEY = 'f8fc3d49501b6e98fb4c4cc98c678350';

const IPGEOLOCATION_API_KEY = '7bb60ddeb98e4fb78aa1871630149afd';

async function get(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
}

export {
    get,
    WEATHER_API_KEY,
    IPGEOLOCATION_API_KEY
}