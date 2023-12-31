// Функция для проверки, является ли строка палиндромом.

function isPalindrome(str) {
  const reverseString = str.split('').reverse().join('');

  return str === reverseString;
}


// Функция, которая возвращает числа из строки в виде целого положительного числа.
function extractNumbersSum(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i], 10)) {
      sum += parseInt(str[i], 10);
    }
  }

  return sum;
}


// Функция, возвращающая исходную строку, дополненную указанными символами до заданной длины.

function addPaddingToString(str, minLength, padding) {
 const actualPad = minLength - str.length;

 if (actualPad <= 0) {

  return str;
 }

 return padding.slice(0, actualPad % padding.length) + padding.repeat(actualPad / padding.length) + str;
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomNumber(fromNumber, toNumber, decimalPlaces) {
  if ((fromNumber || toNumber) < 0) {

    return NaN;
  }

  const result = Math.random() * (toNumber - fromNumber) + fromNumber;

  return result.toFixed(decimalPlaces);
}
