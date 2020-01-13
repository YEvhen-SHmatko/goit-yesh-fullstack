export default function fetchWeather(coordinates) {
  return new Promise((resolve, reject) => {
    const params = {
      key: '7815c01ad4c5493f95f181411192710',
      q: coordinates,
      num_of_days: '1',
      format: 'json',
      tp: '3',
      type: 'city',
      includelocation: 'yes',
      lang: 'ru',
    };

    fetch(
      `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${params.key}&q=${params.q}&type=${params.type}&num_of_days=${params.num_of_days}&tp=${params.tp}&includelocation=${params.includelocation}&lang=${params.lang}&format=${params.format}`,
    )
      .then(response => {
        const apiResponse = response.json();
        return apiResponse;
      })
      .then(apiResponse => {
        const apiData = apiResponse.data;
        return apiData;
      })
      .then(resolve)
      .catch(reject);

    // fetch(
    //   `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`,
    // )
    //   .then(response => {
    //     const apiResponse = response.json({});
    //     return apiResponse;
    //   })
    //   .then(resolve)
    //   .catch(reject);
  });
}
