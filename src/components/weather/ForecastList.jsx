import { formatDate } from '../../utils/formatDate';
import ForecastCard from './ForecastCard';

function ForecastList({ forecast }) {
  if (!forecast.length) return null;

  return (
    <section className="mt-8 pb-4 mx-auto w-full max-w-3xl px-2 sm:px-4">
      <h3 className="mb-4 text-xl text-white font-bold">
        5-Day Forecast
      </h3>

      <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-5">
        {forecast.map((day) => (
          <ForecastCard
            key={day.dt}
            date={formatDate(day.dt_txt)}
            temp={day.main.temp}
            description={
              day.weather[0].description
            }
            icon={day.weather[0].icon}
          />
        ))}
      </div>
    </section>
  );
}

export default ForecastList;
