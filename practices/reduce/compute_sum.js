'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function (num, sum) {
    return num + sum;
  }, 0);
}

module.exports = calculate_elements_sum;

