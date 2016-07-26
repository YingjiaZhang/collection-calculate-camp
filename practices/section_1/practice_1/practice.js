'use strict';
function collect_same_elements(collection_a, collection_b) {
// 10:00  10:41 10:48
  return collection_a.filter(function (num_a) {
    let exist = collection_b.find(function (num_b) {
      return num_b === num_a;
    });
    if(exist){
      return true;
    }else{
      return false;
    }
  });
}

module.exports = collect_same_elements;
