import ErrorMessage from '../components/ui/ErrorMessage';
import Loader from '../components/ui/Loader';
import CurrentWeather from '../components/weather/CurrentWeather';
import SearchForm from '../components/weather/SearchForm';
import { useWeather } from '../hooks/useWeather';

function HomePage() {
  const {
    weather,
    loading,
    error,
    searchWeather,
  } = useWeather();

  return (
    <>
      <SearchForm onSearch={searchWeather} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && (
        <CurrentWeather weather={weather} />
      )}
    </>
  );
}

export default HomePage;
