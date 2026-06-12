import { useEffect, useState } from 'react';
import {
  getCurrentWeather,
  getForecast,
  getCurrentWeatherByCoords,
  getForecastByCoords,
} from '../api/weatherApi';
import { useLocalStorage } from './useLocalStorage';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastCity, setLastCity] = useLocalStorage(
    'lastCity',
    '',
  );
  const [forecast, setForecast] = useState([]);

  const searchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const weatherData =
        await getCurrentWeather(city);
      const forecastData =
        await getForecast(city);
      const dailyForecast =
        forecastData.list.filter((item) =>
          item.dt_txt.includes('12:00:00'),
        );

      setWeather(weatherData);
      setLastCity(city);
      setForecast(dailyForecast);
    } catch (error) {
      setError('City not found');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const searchByLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log(position.coords);
        try {
          setLoading(true);
          setError(null);

          const { latitude, longitude } =
            position.coords;

          const weatherData =
            await getCurrentWeatherByCoords(
              latitude,
              longitude,
            );

          const forecastData =
            await getForecastByCoords(
              latitude,
              longitude,
            );

          const dailyForecast =
            forecastData.list.filter((item) =>
              item.dt_txt.includes('12:00:00'),
            );

          setWeather(weatherData);
          setForecast(dailyForecast);
          setLastCity(weatherData.name);
        } catch (error) {
          setError(
            'Failed to get location weather',
          );
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.log(error);
        
        setError('Location access denied');
      },
    );
  };

  useEffect(() => {
    if (lastCity) {
      searchWeather(lastCity);
    }
  }, []);

  return {
    weather,
    forecast,
    loading,
    error,
    searchWeather,
    searchByLocation,
  };
}
