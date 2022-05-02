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
  let addition = '';
  
  if (options.addition === null) options.addition = 'null';
  if (options.addition != undefined) addition = options.addition;

  for (i = 1; i < options.additionRepeatTimes; i++) {
    addition += (options.additionSeparator || '|') + options.addition;
  }

  if (str === null) str = 'null';
  str = str + addition;

  let newStr = str;

  for (i = 1; i < options.repeatTimes; i++) {
    newStr += (options.separator || '+') + str;
  }

  return newStr;
}

module.exports = {
  repeater
};
