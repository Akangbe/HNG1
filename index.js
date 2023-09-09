// Function to get the current day of the week
function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getUTCDay()];
  return dayOfWeek;
}

// Function to get the current UTC time in milliseconds
function getCurrentUTCTimeInMilliseconds() {
  const currentTimeMillis = new Date().getTime();
  return currentTimeMillis;
}

// Display the current UTC time in milliseconds
document.querySelector('[data-testid="currentUTCTime"]').textContent =
  getCurrentUTCTimeInMilliseconds();

// Display the current day of the week
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  getCurrentDayOfTheWeek();
