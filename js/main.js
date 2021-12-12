function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  else {
    return false;
  }
}

const checkyaer = 2020;
if (isLeapYear(checkyaer)) {
  console.log(checkyaer + '年はうるう年です');
}
else {
  console.log(checkyaer+'年はうるう年ではありません')
}
