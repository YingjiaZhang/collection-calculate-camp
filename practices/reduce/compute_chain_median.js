'use strict';

function compute_chain_median(collection) {
  let src_collection = collection.split('->');
  let num_collection = src_collection.map(function (char) {
    return Number(char);
  });
  let sort_collection = num_collection.sort(function (a, b) {
    return a - b;
  });
  let length = parseInt(num_collection.length / 2);
  return num_collection.length % 2 === 0 ? (sort_collection[length - 1] + sort_collection[length]) / 2 : sort_collection[length];
}

module.exports = compute_chain_median;
