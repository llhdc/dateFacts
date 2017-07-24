const chalk = require('chalk');
const moment = require('moment');

let line1 = chalk.blue(moment().day(1).format("dddd, MMMM Do YYYY, h:mm:ss a"));
let line2 = chalk.magenta(moment().format("DDDo"));
let line3 = chalk.cyan(moment().seconds() + moment().minutes() * 60 + moment().hour() * 3600);
function isDaylightSavingsTime() {
  let line4 = moment().isDST();
  if (line4 === true) {
    console.log('It ' + chalk.green('is') + ' during Daylight Savings Time.');
  } else {
    console.log('It ' + chalk.green('is not') + ' during Daylight Savings Time.');
  }
}
function isNowLeapYear() {
  let line5 = moment().isLeapYear();
  if (line5 === true) {
    console.log('It ' + chalk.red('is') + ' a leap year.');
  } else {
    console.log('It ' + chalk.red('is not') + ' a leap year.');
  }
}

// let leapYear = isNowLeapYear();

console.log(`It is ${line1}.`);
console.log(`It is the ${line2} day of the year.`);
console.log(`It is ${line3} seconds into the day.`);
`${isDaylightSavingsTime()}`;
`${isNowLeapYear()}.`;
