const WeatherClient = require('./weatherClient');

const weather = new WeatherClient();
weather.fetchWeatherData('London');