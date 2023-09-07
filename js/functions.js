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

// принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами
// возвращает исходную строку, дополненную указанными символами до заданной длины.
//Символы добавляются в начало строки.
//Если исходная строка превышает заданную длину, она не должна обрезаться.
//Если «добивка» слишком длинная, она обрезается с конца.

functuion returnFullString(srt, srtMinLenght, strFillSymbols) {
  if (str.length() >= srtMinLenght.length()) {
    return str;
  }
  else {
  let emptySymbols = srtMinLenght.length() - str.length();

  for (let i = 0; i < emptySymbols; i++) {
    strFillSymbols.slice(0,i);
  }
  return
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
