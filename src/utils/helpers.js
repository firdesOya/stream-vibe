export function formatDurationShort(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return hours > 0
    ? `${hours}h ${remainingMinutes}min`
    : `${remainingMinutes}min`;
}

export function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function formatPopularity(number) {
  if (number < 1000) {
    return number.toString();
  }
  return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
}
