export default {
  form: {
    section: document.querySelector('#search-form'),
    input: document.querySelector('.search-form__input'),
    button: document.querySelector('.search-form__button'),
  },
  weather: {
    section: document.querySelector('#weather'),
    img: document.querySelector('.icon'),
    location: document.querySelector('span[data-field="location"]'),
    temperature: document.querySelector('span[data-field="temp"]'),
    humidity: document.querySelector('span[data-field="humidity"]'),
    wind: document.querySelector('span[data-field="wind"]'),
    conditions: document.querySelector('span[data-field="conditions"]'),
  },
};
