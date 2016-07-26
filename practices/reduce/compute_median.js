'use strict';

function compute_median(collection) {
  let sort_collection = collection.sort(function (a, b) {
    return a - b;
  });
  let length = collection.length;
  return length % 2 === 0 ? (sort_collection[parseInt(length / 2) - 1] + sort_collection[parseInt(length / 2)]) / 2 : sort_collection[parseInt(length / 2)];
}

module.exports = compute_median;


