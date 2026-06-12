import ErrorMessage from '../components/ui/ErrorMessage';
import Loader from '../components/ui/Loader';
import CurrentWeather from '../components/weather/CurrentWeather';
import ForecastList from '../components/weather/ForecastList';
import SearchForm from '../components/weather/SearchForm';
import { useWeather } from '../hooks/useWeather';
import { getWeatherTheme } from '../utils/weatherTheme';

function HomePage() {
  const {
    weather,
    forecast,
    loading,
    error,
    searchWeather,
  } = useWeather();

  const themeClass = weather
    ? getWeatherTheme(weather.weather[0].main)
    : 'weather-day';

  return (
    <div
      className={`min-h-screen transition-all
      duration-700 ${themeClass}
      `}
    >
      <SearchForm onSearch={searchWeather} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && (
        <CurrentWeather weather={weather} />
      )}
      {forecast.length > 0 && (
        <ForecastList forecast={forecast} />
      )}
    </div>
  );
}

export default HomePage;
