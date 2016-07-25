'use strict';

function grouping_count(collection) {
  let result = [];
  collection.filter(function (num_a) {
    let exist = result.find(function (num_b) {
      return num_b.key === num_a;
    });
    if (exist) {
      exist.count++;
    } else {
      result.push({key: num_a, count: 1});
    }
  });


  let temp = {};
  result.forEach(function (tmp) {
    temp[tmp.key] = tmp.count;
  });
  return temp;

}

module.exports = grouping_count;
