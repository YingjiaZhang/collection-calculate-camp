'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let result = [];
  collection_a.filter(function (num_a) {
    let exist = collection_b.find(function (num_b) {
      return num_b === num_a;
    });
    if (!exist) {
      result.push(num_a);
    }
  });
  collection_b.filter(function (num_b) {
    let exist = collection_a.find(function (num_a) {
      return num_a === num_b;
    });
    if (!exist) {
      push(num_b);
    }
  });
  return result;


}

module.exports = choose_no_common_elements;
