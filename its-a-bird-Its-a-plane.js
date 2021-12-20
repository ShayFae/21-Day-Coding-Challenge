const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  const weather = {
    temperature: temperature,
    condition: condition,
    windSpeed: windSpeed,
    windDirection: windDirection
  };

  weather.temperature = Math.round((temperature - 32) * 5 / 9);
  weather.windSpeed = Math.round(windSpeed / 2.237);
return weather;
};
