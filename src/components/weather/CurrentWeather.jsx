import { formatTime } from '../../utils/formatTime';
import {
  formatTemperature,
  formatWind,
} from '../../utils/temperature';
import { getWeatherIcon } from '../../utils/weatherIcons';
import ToggleSwitch from '../ui/ToggleSwitch';

function CurrentWeather({
  weather,
  unit,
  setUnit,
  toggleFavorite,
  favorites,
}) {
  if (!weather) return null;

  const {
    name,
    main,
    wind,
    sys,
    weather: weatherInfo,
  } = weather;

  const icon = weatherInfo[0].icon;
  const description = weatherInfo[0].description;
  const isFavorite = favorites.includes(name);

  return (
    <div className="mt-6 flex justify-center mx-2 sm:mx-4">
      <div className="w-full max-w-md rounded-2xl bg-[#8f79aa] text-white p-3 sm:p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold">
                {name}, {sys.country}
              </h2>
              <button
                onClick={() => toggleFavorite(name)}
                className="text-2xl hover:scale-110 transition"
              >
                {isFavorite ? '❤️' : '🤍'}
              </button>
            </div>

            <p className="capitalize text-white/80">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={getWeatherIcon(icon)}
              alt={description}
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <p className="text-5xl sm:text-6xl font-bold">
            {formatTemperature(main.temp, unit)}
          </p>

          <ToggleSwitch
            value={unit}
            onChange={setUnit}
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-4">
          <div className="rounded-xl bg-white/15 backdrop-blur-sm p-3">
            <p className="text-sm text-white/80">
              Feels like
            </p>

            <p className="font-semibold">
              {formatTemperature(
                main.feels_like,
                unit,
              )}
            </p>
          </div>

          <div className="rounded-xl bg-white/15 backdrop-blur-sm p-3">
            <p className="text-sm text-white/80">
              Humidity
            </p>

            <p className="font-semibold">
              {main.humidity}%
            </p>
          </div>

          <div className="rounded-xl bg-white/15 backdrop-blur-sm p-3">
            <p className="text-sm text-white/80">
              Wind
            </p>

            <p className="font-semibold">
              {formatWind(wind.speed, unit)}
            </p>
          </div>

          <div className="rounded-xl bg-white/15 backdrop-blur-sm p-3">
            <p className="text-sm text-white/80">
              Pressure
            </p>

            <p className="font-semibold">
              {main.pressure} hPa
            </p>
          </div>
          <div className="rounded-xl bg-white/15 backdrop-blur-sm p-3">
            <p className="text-sm text-white/80">
              Sunrise
            </p>

            <p className="font-semibold">
              {formatTime(sys.sunrise)}
            </p>
          </div>

          <div className="rounded-xl bg-white/15 backdrop-blur-sm p-3">
            <p className="text-sm text-white/80">
              Sunset
            </p>

            <p className="font-semibold">
              {formatTime(sys.sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
