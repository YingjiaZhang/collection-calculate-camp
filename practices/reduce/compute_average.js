'use strict';

function compute_average(collection) {
  return collection.reduce(function (num, sum) {
      return sum + num;
    }, 0) / collection.length;
}

module.exports = compute_average;

