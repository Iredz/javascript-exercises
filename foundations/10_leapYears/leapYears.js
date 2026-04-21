const leapYears = function (year) {
    isYearDivisibleByFour = year % 4 === 0;
    isCentury = year % 100 === 0;
    isYearDivisibleByFourHundred = year % 400 === 0;

    if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
