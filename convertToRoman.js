const convertNumberToRoman = (number) => {
  let message = isValidNumber(number);
  if (message === true) {
    const arrayInDecimalSystem = getArrayInDecimalSystem(number);
    const intsAndRomansArray = getArrayWithIntsAndRomans(arrayInDecimalSystem);

    const romanNumber = formatInRomanNumber(
      arrayInDecimalSystem,
      intsAndRomansArray
    );
    return romanNumber;
  }

  return message;
};

const isValidNumber = (number) => {
  let isValid = true;
  if (isNaN(number)) {
    isValid = 'Invalid input. Must be a number.';
  } else if (!Number.isInteger(number)) {
    isValid = 'Invalid input. Must be an integer number.';
  } else if (number > 9999) {
    isValid = 'This number cannot be converted, try a smaller number.';
  }
  return isValid;
};

const getArrayInDecimalSystem = (number) => {
  const arrayInDecimalSystem = number.toString().split('').reverse();

  let units = 1;
  for (let index = 0; index < arrayInDecimalSystem.length; index++) {
    arrayInDecimalSystem.splice(index, 1, arrayInDecimalSystem[index] * units);
    units *= 10;
  }

  return arrayInDecimalSystem;
};

const getArrayWithIntsAndRomans = (arrayInDecimalSystem) => {
  const numbers = require('./romanNumbers');
  const romansArray = [];
  for (let index = 0; index < arrayInDecimalSystem.length; index++) {
    const valueInRoman = numbers.intsAndRomansList.filter(
      (romanNumber) => romanNumber[arrayInDecimalSystem[index]]
    )[0];
    romansArray.push(valueInRoman);
  }

  return romansArray;
};

const formatInRomanNumber = (arrayInDecimalSystem, intsAndRomansArray) => {
  const romanNumber = intsAndRomansArray
    .map((value, index) => {
      return value[arrayInDecimalSystem[index]];
    })
    .reverse()
    .join('')
    .replace(' ', '');

  return romanNumber;
};

//You can change the number
const number = 546;
const romanNumber = convertNumberToRoman(number);
console.log(`The number ${number} in roman is: ${romanNumber}`);

exports.convert = convertNumberToRoman;
