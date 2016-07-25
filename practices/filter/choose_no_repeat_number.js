'use strict';

function choose_no_repeat_number(collection) {
  let temp = [];
  return collection.filter(function (num_a) {
    let exist = temp.find(function (num) {
      return num === num_a;
    });
    if (exist) {
      return false;
    } else {
      temp.push(num_a);
      return true;
    }
  });


}

module.exports = choose_no_repeat_number;
