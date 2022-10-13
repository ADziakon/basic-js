const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const seasons = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter"
  ]
  let m;
  if (date == undefined || date == null) {
    return "Unable to determine the time of year!"
  }
  if (!(date instanceof Date)){
    throw new Error("Invalid date!");
  }
  if (date.toString != Date.prototype.toString){
    throw new Error("Invalid date!");
  }

      m = date.getMonth();
      return seasons[m];

}

module.exports = {
  getSeason
};
