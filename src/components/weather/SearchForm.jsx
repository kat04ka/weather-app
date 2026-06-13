import { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

function SearchForm({ onSearch, onLocation }) {
  const [city, setCity] = useState('');

  const trimmedCity = city.trim();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!trimmedCity) return;

    onSearch(trimmedCity);
    setCity('');
  };

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="flex flex-col items-center gap-4 w-full max-w-xl">
        <h1 className="text-2xl sm:text-4xl text-center text-white font-bold">
          Open Weather App
        </h1>
        <h2 className="text-lg sm:text-2xl text-white/40">
          Weather in your city
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <Input
            value={city}
            placeholder="Enter your city"
            onChange={(e) =>
              setCity(e.target.value)
            }
          />
          <Button
            type="submit"
            disabled={!trimmedCity}
          >
            Search
          </Button>
        </form>

        <Button
          type="button"
          onClick={onLocation}
        >
          My Location
        </Button>
      </div>
    </div>
  );
}

export default SearchForm;
