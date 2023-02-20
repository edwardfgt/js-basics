const getNumberSign = (int) => {
  if (int < 0) {
    return 'negative';
  } else if (int === 0) {
    return 'zero';
  } else {
    return 'positive';
  }
}

const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
}

module.exports = getNumberSign;
module.exports = isValidLength;