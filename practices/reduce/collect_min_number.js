'use strict';

function collect_min_number(collection) {
  return collection.reduce(function (num, initVal) {
    return num <= initVal ? num : initVal;
  }, collection[0]);
}

module.exports = collect_min_number;

