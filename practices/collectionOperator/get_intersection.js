'use strict';

function get_intersection(collection_a, collection_b) {
  let result = [];
  collection_b.forEach(function (numb) {
    collection_a.forEach(function (numa) {
      if (numa === numb) {
        result.push(numb);
      }
    });
  });
  return result;
}

module.exports = get_intersection;
