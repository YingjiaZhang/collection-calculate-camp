'use strict';
function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(function (num_a) {
    let exist = object_b.value.find(function (num_b) {
      return num_b === num_a;
    });
    if (exist) {
      return true;
    } else {
      return false;
    }
  });
}

module.exports = collect_same_elements;
