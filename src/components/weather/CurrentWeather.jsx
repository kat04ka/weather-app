import { formatTemperature } from '../../utils/temperature';
import { getWeatherIcon } from '../../utils/weatherIcons';

function CurrentWeather({ weather }) {
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

  return (
    <div className="mt-6 flex justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base md:text-2xl font-bold">
              {name}, {sys.country}
            </h2>

            <p className="capitalize text-gray-500">
              {description}
            </p>
          </div>

          <img
            src={getWeatherIcon(icon)}
            alt={description}
          />
        </div>

        <div className="mt-4">
          <p className="text-4xl md:text-5xl font-bold">
            {formatTemperature(main.temp)}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-gray-100 p-3">
            <p className="text-sm text-gray-500">
              Feels like
            </p>

            <p className="font-semibold">
              {formatTemperature(main.feels_like)}
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-3">
            <p className="text-sm text-gray-500">
              Humidity
            </p>

            <p className="font-semibold">
              {main.humidity}%
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-3">
            <p className="text-sm text-gray-500">
              Wind
            </p>

            <p className="font-semibold">
              {wind.speed} m/s
            </p>
          </div>

          <div className="rounded-xl bg-gray-100 p-3">
            <p className="text-sm text-gray-500">
              Pressure
            </p>

            <p className="font-semibold">
              {main.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
