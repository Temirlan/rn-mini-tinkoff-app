import { CURRENCY_API_KEY } from '@env';

const API_KEY = CURRENCY_API_KEY;

const URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`;

export { URL, API_KEY };
