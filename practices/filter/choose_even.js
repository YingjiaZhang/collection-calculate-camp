'use strict';

function choose_even(collection) {
  return collection.filter(function (num) {
    if (num === 0 || num % 2 !== 0) {
      return num;
    }
  });
}

module.exports = choose_even;
