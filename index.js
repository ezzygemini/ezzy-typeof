/**
 * Obtains a true value of type of element.
 *
 * @param {*} anyValue The value to check
 */
const trueTypeOf = anyValue =>
  Object.prototype.toString.call(anyValue)
    .toLowerCase()
    .replace('[object ', '')
    .replace(']', '');

module.exports = trueTypeOf;
