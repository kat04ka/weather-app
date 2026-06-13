import ErrorMessage from '../components/ui/ErrorMessage';
import Loader from '../components/ui/Loader';
import CurrentWeather from '../components/weather/CurrentWeather';
import FavoriteCities from '../components/weather/FavoriteCities';
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
    clearHistory,
    toggleFavorite,
    favorites,
    clearFavorites,
    removeFavorite,
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
        onClear={clearHistory}
      />

      <FavoriteCities
        favorites={favorites}
        onSelect={searchWeather}
        onClear={clearFavorites}
        onRmove={removeFavorite}
      />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && (
        <CurrentWeather
          weather={weather}
          unit={unit}
          setUnit={setUnit}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
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
