import { useEffect, useState } from 'react';
import { getCurrentWeather } from '../api/weatherApi';
import { useLocalStorage } from './useLocalStorage';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastCity, setLastCity] = useLocalStorage(
    'lastCity',
    '',
  );

  const searchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getCurrentWeather(city);
      setWeather(data);
      setLastCity(city);
    } catch (error) {
      setError('City not found');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (lastCity) {
      searchWeather(lastCity);
    }
  }, []);

  return {
    weather,
    loading,
    error,
    searchWeather,
  };
}
