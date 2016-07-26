'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  return collection_a.filter(function (num_a) {
    let exist = collection_b.find(function (num_b) {
      return num_a % num_b === 0;
    });
    if (exist) {
      return true;
    } else {
      return false
    }

  });

}

module.exports = choose_divisible_integer;
