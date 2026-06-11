import ForecastCard from './ForecastCard';

function ForecastList({ forecast }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {forecast.map((day) => (
        <ForecastCard
          key={day.dt}
          date={day.date}
          temp={day.temp}
          description={day.description}
          icon={day.icon}
        />
      ))}
    </div>
  );
}

export default ForecastList;
