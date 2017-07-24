const chalk = require('chalk');

const moment = require('moment');
// let dayOfYear =
let now = moment("Jul 18, 2013").format('MMM. d, YYYY');
  console.log(`It is ${now}.`);

module.exports = now;
