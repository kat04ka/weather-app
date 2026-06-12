import ErrorMessage from '../components/ui/ErrorMessage';
import Loader from '../components/ui/Loader';
import CurrentWeather from '../components/weather/CurrentWeather';
import ForecastList from '../components/weather/ForecastList';
import SearchForm from '../components/weather/SearchForm';
import SearchHistory from '../components/weather/SearchHistory';
import { useWeather } from '../hooks/useWeather';
import { getWeatherTheme } from '../utils/weatherTheme';

function HomePage() {
  const {
    weather,
    forecast,
    loading,
    error,
    searchWeather,
    searchByLocation,
    unit,
    setUnit,
    searchHistory,
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
      <SearchForm
        onSearch={searchWeather}
        onLocation={searchByLocation}
        unit={unit}
        setUnit={setUnit}
      />

      <SearchHistory
        history={searchHistory}
        onSelect={searchWeather}
      />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && (
        <CurrentWeather
          weather={weather}
          unit={unit}
          setUnit={setUnit}
        />
      )}
      {forecast.length > 0 && (
        <ForecastList
          forecast={forecast}
          unit={unit}
        />
      )}
    </div>
  );
}

export default HomePage;
