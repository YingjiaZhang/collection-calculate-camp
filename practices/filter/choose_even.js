'use strict';

function choose_even(collection) {
  return collection.filter(function (num) {

    if (num % 2 === 0) {
      return true;
    }

  });

}

module.exports = choose_even;
