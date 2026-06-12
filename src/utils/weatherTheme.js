export const getWeatherTheme = (
  weatherType
) => {
  switch (weatherType) {
    case 'Clear':
      return 'weather-day';

    case 'Clouds':
      return 'weather-sunset';

    case 'Rain':
    case 'Drizzle':
    case 'Thunderstorm':
      return 'weather-night';

    case 'Snow':
    case 'Mist':
    case 'Fog':
      return 'weather-sunrise';

    default:
      return 'weather-day';
  }
};