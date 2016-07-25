'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (num_a) {
    let exist = collection_b.find(function (num_b) {
      return num_a === num_b;
    });
    if (exist) {
      return true;
    }else{
      return false;
    }
  });
}

module.exports = choose_common_elements;
