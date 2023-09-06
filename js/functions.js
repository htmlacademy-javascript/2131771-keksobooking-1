function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("academy"));



function randomNumber(fromNumber, toNumber, decimalPlaces) {
  if ((fromNumber || toNumber) < 0) {
    return NaN;
  }
else {
  return Math.random() * (toNumber - fromNumber) + fromNumber;
}
}

console.log(randomNumber(55, 3, 3));
