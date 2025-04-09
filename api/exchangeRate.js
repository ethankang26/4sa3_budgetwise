import axios from 'axios';

const API_KEY = 'YOUR_OPEN_EXCHANGE_RATES_API_KEY';
const BASE_URL = 'https://openexchangerates.org/api/latest.json';

export async function fetchRates() {
    try {
        const response = await axios.get(`${BASE_URL}?app_id=${API_KEY}`);
        return response.data.rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error.message);
        return {};
    }
}
