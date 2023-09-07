// Функция для проверки, является ли строка палиндромом.

function isPalindrome(str) {
  const reverseString = str.split('').reverse().join('');

  if (str === reverseString) {
    return true;
  }
  else {
    return false;
  }
}


// Функция, которая возвращает числа из строки в виде целого положительного числа.
function extractNumbersSum(str) {
  str = str.split('');
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i], 10)) {
      sum = sum + parseInt(str[i], 10);
    }
  }
  return sum;
}


// Функция, возвращающая исходную строку, дополненную указанными символами до заданной длины.

function returnFullString(str, srtMinLenght, strFillSymbols) {
  if (str.length >= srtMinLenght) {
    return str;
  }
  else {
    let emptySymbols = srtMinLenght - str.length;
    if (strFillSymbols.length <= srtMinLenght) {
      for (let i = 1; i <= emptySymbols; i++) {
        const symbolsToFill = strFillSymbols.slice(0,i);
        const result = symbolsToFill + str;
      }
      return result;
    }
    else {
      let emptySymbols = srtMinLenght - str.length;
      if (strFillSymbols.length >= srtMinLenght) {
        for (let i = 1; i <= emptySymbols; i++) {
          let symbolsToFill = strFillSymbols.slice(0,i);
          let result = symbolsToFill + str;
        }

        return result;
      }
    }
  }
}


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomNumber(fromNumber, toNumber, decimalPlaces) {
  if ((fromNumber || toNumber) < 0) {
    return NaN;
  }
  else {
    let result = Math.random() * (toNumber - fromNumber) + fromNumber;
    return result.toFixed(decimalPlaces);
  }
}
