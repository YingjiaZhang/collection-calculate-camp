'use strict';

function collect_max_number(collection) {
  return collection.reduce(function (num,result) {
    return num >= result ? num : result;
  }, 0);
}

module.exports = collect_max_number;
