'use strict';

function get_union(collection_a, collection_b) {
  collection_b.forEach(function (num_b) {
    let exist = collection_a.find(function (num_a) {
      return num_b === num_a;
    });
    if (!exist) {
      collection_a.push(num_b);
    }
  });
  return collection_a;
}
module.exports = get_union;

