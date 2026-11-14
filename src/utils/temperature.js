export const formatTemperature = (
  temp,
  unit = 'C',
) => {
  if (unit === 'F') {
    return `${Math.round((temp * 9) / 5 + 32)}°F`;
  }

  return `${Math.round(temp)}°C`;
};

export function formatWind(speed, unit) {
  if (unit === 'F') {
    return `${(speed * 2.237).toFixed(1)} mph`;
  }

  return `${speed.toFixed(1)} m/s`;
}