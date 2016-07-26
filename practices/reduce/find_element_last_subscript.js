'use strict';

function calculate_elements_sum(collection, element) {
  let res = 0;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === element) {
      res = i;
    }
  }
  return res;
}

module.exports = calculate_elements_sum;
