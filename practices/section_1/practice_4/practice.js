'use strict';
function collect_same_elements(collection_a, object_b) {

  let result = [];
  collection_a.forEach(function (obj_a) {
    let exist = object_b.value.find(function (num_b) {
      return obj_a.key === num_b;
    });
    if (exist) {
      result.push(obj_a.key);
    }
  });
  return result;
}

module.exports = collect_same_elements;
