import { formatTemperature } from '../../utils/temperature';
import { getWeatherIcon } from '../../utils/weatherIcons';
import ToggleSwitch from '../ui/ToggleSwitch';

function ForecastCard({
  date,
  temp,
  description,
  icon,
  unit,
}) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-[#8f79aa] p-4 shadow-md">
      <p className="font-medium text-white">{date}</p>

      <img
        src={getWeatherIcon(icon)}
        alt={description}
      />

      <p className="text-xl text-white font-bold">
        {formatTemperature(temp, unit)}
      </p>

      <p className="text-sm text-white/80 text-center capitalize">
        {description}
      </p>
    </div>
  );
}

export default ForecastCard;
