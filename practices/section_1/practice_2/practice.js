'use strict';
function collect_same_elements(collection_a, collection_b) {
  let result = [];
  collection_a.forEach(function (num_a) {
    collection_b.forEach(function (num_b) {
      if (num_b.length >= 1) {
        num_b.forEach(function (num) {
          if (num === num_a) {
            result.push(num_a);
          }
        });
      } else {
        if (num_b === num_a) {
          result.push(num_a);
        }
      }
    });
  });
  return result;
}

module.exports = collect_same_elements;
