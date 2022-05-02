const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(stringToEncode, keyword) {

    if (stringToEncode == null || keyword == null) throw Error('Incorrect arguments!');
    stringToEncode = stringToEncode.toUpperCase();
    keyword = keyword.toUpperCase();

    let stringToDecode = [];
    let count = 0;

    for (let i = 0; i < stringToEncode.length; i++) {
      if (stringToEncode.charCodeAt(i) < 65 || stringToEncode.charCodeAt(i) > 90) {
        stringToDecode[i] = stringToEncode[i];
      } else {
        stringToDecode[i] =
          String.fromCharCode((stringToEncode.charCodeAt(i) - 65 + keyword.charCodeAt(count % keyword.length) - 65) % 26 + 65);
        count++;
      }
    }

    if (this.direct === false) return stringToDecode.reverse().join('');
    else return stringToDecode.join('');
  }

  decrypt(stringToDecode, keyword) {

    if (stringToDecode == null || keyword == null) throw Error('Incorrect arguments!');
    stringToDecode = stringToDecode.toUpperCase();
    keyword = keyword.toUpperCase();

    let string = [];
    let count = 0;

    for (let i = 0; i < stringToDecode.length; i++) {
      if (stringToDecode.charCodeAt(i) < 65 || stringToDecode.charCodeAt(i) > 90) {
        string[i] = stringToDecode[i];
      } else {
        string[i] = String.fromCharCode(((stringToDecode.charCodeAt(i) - keyword.charCodeAt(count % keyword.length) + 26) % 26) + 65);
        count++;
      }
    }

    if (this.direct === false) return string.reverse().join('');
    else return string.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
