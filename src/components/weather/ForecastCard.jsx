import { formatTemperature } from '../../utils/temperature';
import { getWeatherIcon } from '../../utils/weatherIcons';

function ForecastCard({
  date,
  temp,
  description,
  icon,
}) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-white p-4 shadow-md">
      <p className="font-medium">{date}</p>

      <img
        src={getWeatherIcon(icon)}
        alt={description}
      />

      <p className="text-xl font-bold">
        {formatTemperature(temp)}
      </p>

      <p className="text-sm text-gray-500 capitalize">
        {description}
      </p>
    </div>
  );
}

export default ForecastCard;
