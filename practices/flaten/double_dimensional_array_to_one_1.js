'use strict';

function double_to_one(collection) {
  let result = [];
  collection.forEach(function (colls) {
    if (colls.length >= 1) {
      colls.forEach(function (num) {
        result.push(num);
      });
    } else {
      result.push(colls);
    }

  });
  return result;
}

module.exports = double_to_one;
