const convertToCelsius = function (fahrenheit) {

    let result = Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
    return result;
};

const convertToFahrenheit = function (celsius) {
    let result = Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
    return result;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
