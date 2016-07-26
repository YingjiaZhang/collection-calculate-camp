'use strict';

function double_to_one(collection) {
  let one_array = [];
  collection.forEach(function (arr) {
    if (arr.length >= 1) {
      arr.forEach(function (num) {
        one_array.push(num);
      });
    } else {
      one_array.push(arr);
    }
  });

  let result = [];
  one_array.forEach(function (num) {
    let exist = result.find(function (temp) {
      return num === temp;
    });
    if (!exist) {
      result.push(num);
    }

  });

  return result;
}

module.exports = double_to_one;
