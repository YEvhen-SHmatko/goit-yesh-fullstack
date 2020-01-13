import '../css/style.css';
import getGeoPosition from './getGeoPosition.js';
import refs from './refs.js';
import fetchWeather from './fetchWeather.js';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
let inputText = '';
const onGetPositionSuccess = location => {
  const position = location.coords;
  return `${position.latitude}, ${position.longitude}`;
};
const onGetPositionError = error => {
  PNotify.alert(
    'Нет прав доступа к геопозиции, используйте поиск по имени города.',
  );
};

const onGetWeather = query => {
  fetchWeather(query)
    .then(elem => {
      refs.weather.img.src = elem.current_condition[0].weatherIconUrl[0].value;
      refs.weather.location.innerHTML = `${elem.nearest_area[0].areaName[0].value},${elem.nearest_area[0].region[0].value},${elem.nearest_area[0].country[0].value}`;
      refs.weather.temperature.innerHTML = `${elem.current_condition[0].temp_C}&#8451;`;
      refs.weather.humidity.innerHTML = `${elem.current_condition[0].humidity}`;
      refs.weather.wind.innerHTML = `${elem.current_condition[0].windspeedKmph}kph`;
      refs.weather.conditions.innerHTML =
        elem.current_condition[0].weatherDesc[0].value;
      refs.weather.section.classList.remove('is-hidden');
    })
    .catch(error => {
      console.error(error);
    });
};

getGeoPosition()
  .then(onGetPositionSuccess)
  .then(coordinates => {
    onGetWeather(coordinates);
  })
  .catch(onGetPositionError);
refs.form.input.addEventListener('change', input => {
  inputText = input.currentTarget.value;
});
refs.form.button.addEventListener('click', () => {
  event.preventDefault();
  if (inputText.length <= 0) {
    PNotify.info(
      'Please enter the city in which you want to know the weather.',
    );
    return;
  }
  onGetWeather(inputText);
});
