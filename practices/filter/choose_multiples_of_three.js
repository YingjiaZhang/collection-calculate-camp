'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter(function (num) {
    if (num % 3 === 0) {
      return true;
    }
  });

}

module.exports = choose_multiples_of_three;
