const moment = require("moment");
const momentTimezone = require("moment-timezone");

const birthdate = "1990-01-01";
const currentDate = moment();

const daysBetween = currentDate.diff(birthdate, "days");

const ageInYears = Math.floor(daysBetween / 365);
const ageInMonths = Math.floor((daysBetween % 365) / 30);
const ageInDays = daysBetween % 30;

console.log(`You are ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days old.`);

function getClosestDateToCurrentDate(date1, date2) {
  const distanceToCurrentDate1 = Math.abs(currentDate.diff(date1, "days"));
  const distanceToCurrentDate2 = Math.abs(currentDate.diff(date2, "days"));

  if (distanceToCurrentDate1 < distanceToCurrentDate2) {
    return date1;
  } else {
    return date2;
  }
}

function isDateBefore(date1, date2) {
  return date1 < date2;
}

const date1 = moment("2000-03-02");
const date2 = moment("2001-02-15");

const daysBetweenDates = date2.diff(date1, "days");

console.log(`The number of days between the two dates is ${daysBetweenDates}`);

const closestDate = getClosestDateToCurrentDate(date1, date2);

console.log(`The date closest to the current date is ${closestDate}`);

const isDate1BeforeDate2 = isDateBefore(date1, date2);

console.log(`Is the first date before the second date? ${isDate1BeforeDate2}`);

const londonTime = currentDate.tz("Europe/London").format("HH:mm:ss");

console.log(`The current time in London is ${londonTime}`);