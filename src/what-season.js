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
  let month;
  if (date === undefined) { return 'Unable to determine the time of year!' }
  if (["winter", "spring", "summer", "autumn"].includes(date)) { month = date; }
  else if (!(date instanceof Date)) { throw new Error('Invalid date!'); }
  else { month = date.getMonth();
  switch (month) { 
    case 11:
    case 0:
    case 1:
    case "winter":
      return "winter";
    case 2:
    case 3:
    case 4:
      case "spring":
      return "spring";
    case 6:
    case 7:
    case 5:
      case "summer":
      return "summer";
    case 8:
    case 9:
    case 10:
      case "autumn":
      return "autumn";

    default:
      return 'Invalid date!'
  }
}
}

module.exports = {
  getSeason
};
