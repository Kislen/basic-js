const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let ar = []
  const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
  };
   for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (options.addition === null) options.addition ='null';
    else options.addition = options.addition.toString();
    ar[i] = options.addition;
   }
   let add = ar.join(`${options.additionSeparator}`);
   
   let arr = [];
   if (str === null) str ='null';
   else str = str.toString();
   for (let i = 0; i < options.repeatTimes; i++) {
    arr[i] = str + add;
   }
   options.separator === undefined? options.separator = '+':options.separator = options.separator;
   return arr.join(`${options.separator}`);
}

module.exports = {
  repeater
};
