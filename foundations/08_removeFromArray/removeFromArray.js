const removeFromArray = function (arr, ...args) {
    return arr.filter((item) => !args.includes(item))
};

removeFromArray([1, 2, 3, 4], 1, 3)

// Do not edit below this line
module.exports = removeFromArray;
