'use strict';
var number_map_to_word = function (collection) {
  collection.map(function (num) {
    return String.fromCharCode(num + 96);
  });
};

module.exports = number_map_to_word;
